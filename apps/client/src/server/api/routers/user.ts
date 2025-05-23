import { z } from 'zod'

import { compare, hashSync } from 'bcrypt'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc'
import { signIn } from '~/auth'
import { AuthError } from 'next-auth'
import { Resend } from 'resend'

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
export const userRouter = createTRPCRouter({
  getProfile: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({
      where: { id: ctx.session.user.id },
    })
  }),

  updateProfilePicture: protectedProcedure
    .input(z.object({ filePath: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          image: input.filePath,
        },
      })
    }),

  create: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
        confirmPassword: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({ where: { email: input.email } })
      if (user) {
        throw new Error('User already exists')
      }

      console.log('input', input)

      if (input.password !== input.confirmPassword) {
        throw new Error('Passwords do not match')
      }

      const hashedPassword = hashSync(input.password, 10)

      const resend = new Resend(process.env.RESEND_API_KEY)

      console.log('sending email...')

      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['nathan.samsoedien@gmail.com'],
        subject: 'hello world',
        text: 'it works!',
        // attachments: [
        //   {
        //     filename: 'invoice.pdf',
        //     content: invoiceBuffer,
        //   },
        // ],
        headers: {
          'X-Entity-Ref-ID': '123456789',
        },
        tags: [
          {
            name: 'category',
            value: 'confirm_email',
          },
        ],
      })

      return ctx.db.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
        },
      })
    }),

  signin: publicProcedure
    .input(z.object({ email: z.string().email(), password: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const validatedFields = LoginSchema.safeParse(input)

      if (!validatedFields.success) {
        throw new Error('Invalid fields')
      }

      const { email, password } = validatedFields.data

      console.log(validatedFields.data)

      const user = await ctx.db.user.findUnique({ where: { email } })

      if (!user || !user.password) {
        throw new Error('No user found')
      }

      const passwordsMatch = await compare(password, user.password)

      if (!passwordsMatch) {
        throw new Error('Invalid credentials')
      }

      console.log('SIGNING IN CREDENTIALS PROVIDER...')

      try {
        await signIn('credentials', {
          email,
          password,
          redirect: false,
        })
      } catch (err) {
        console.log('has error', err)
        if (err instanceof AuthError)
          switch (err.type) {
            case 'CredentialsSignin':
              return { error: 'Invalid credentials' }
            case 'CallbackRouteError':
              return err.cause?.err?.toString()
            default:
              return { error: 'Unknown error' }
          }
        throw err
      }
    }),

  signinMagicLink: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({ where: { email: input.email } })

      if (!user) {
        throw new Error('User not found')
      }

      const { email } = user
      await signIn('resend', {
        email,
      })
    }),
})
