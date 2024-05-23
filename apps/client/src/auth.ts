import NextAuth, { type DefaultSession } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'

import { z } from 'zod'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { compare, hashSync } from 'bcrypt'

import { JWT } from 'next-auth/jwt'

const prisma = new PrismaClient()

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Password', type: 'password' },
      },
      // authorize: async (credentials) => {
      // let user = null
      // const validatedFields = LoginSchema.safeParse(credentials)
      // if (validatedFields.success) {
      //   const { email, password } = validatedFields.data
      //   user = await prisma.user.findUnique({ where: { email } })
      //   if (!user || !user.password) throw new Error('No user found')
      //   const passwordsMatch = await compare(password, user.password)
      //   if (!passwordsMatch) throw new Error('Invalid credentials')
      // }
      // return user
      // },
    }),
    Resend({
      from: 'auth@luth.samsoedien.com',
    }),
    GitHub({
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          gh_username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: profile.email === 'info@samsoedien.com' ? 'ADMIN' : 'USER',
        }
      },
    }),
    Google,
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        if (user.id) token.id = user.id
        token.role = user.role
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id
      session.user.role = token.role

      return session
    },
    // authorized: async ({ request, token }) => {
    //   if (request.nextUrl.pathname.startsWith('/settings/admin') && token.role !== 'ADMIN')
    //     return false
    //   return true
    // },
  },
  // pages: {
  //   signIn: '/signin',
  // },
  // debug: process.env.NODE_ENV === 'development',
})

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      // role: UserRole
      role: 'USER' | 'ADMIN'
    } & DefaultSession['user']
  }

  interface User {
    // ...other properties
    role: 'USER' | 'ADMIN'
    // role: UserRole;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role: 'USER' | 'ADMIN'
  }
}
