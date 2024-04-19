import NextAuth, { type DefaultSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
})

// /**
//  * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
//  * object and keep type safety.
//  *
//  * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
//  */
// declare module 'next-auth' {
//   interface Session extends DefaultSession {
//     user: {
//       id: string
//       // ...other properties
//       // role: UserRole;
//     } & DefaultSession['user']
//   }

//   // interface User {
//   //   // ...other properties
//   //   // role: UserRole;
//   // }
// }
