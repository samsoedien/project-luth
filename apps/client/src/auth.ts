import NextAuth, { type DefaultSession } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'

import { ZodError, z } from 'zod'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { compare, hashSync } from 'bcrypt'

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
      authorize: async (credentials) => {
        let user = null

        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email, password } = validatedFields.data

          user = await prisma.user.findUnique({ where: { email } })
          if (!user || !user.password) throw new Error('No user found')

          const passwordsMatch = await compare(password, user.password)

          if (!passwordsMatch) throw new Error('Invalid credentials')
        }
        return user
      },
    }),
    Resend({
      from: 'contact@samsoedien.com',
    }),
    GitHub,
    Google,
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
  // callacks: {

  // async session({ session, token }) {
  //   if (session.user && token.sub) session.user.id = token.sub
  //   console.log('session', session)

  //   return session
  // },
  // async jwt({ token, session }) {
  //   // if (session.user) {
  //   //   token.role = session.user.role
  //   // }

  //   console.log('token: ', token)
  //   return token
  // },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    // session({ session, token }) {
    //   session.user.id = token.id
    //   return session
    // },
  },

  // pages: {
  //   signIn: '/signin',
  // },
  debug: process.env.NODE_ENV === 'development',
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

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}
