import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '~/server/api/trpc'

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany()
  }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), description: z.string(), priceInCents: z.number() }))
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return ctx.db.product.create({
        data: {
          name: input.name,
          description: input.description,
          priceInCents: input.priceInCents,
          userId: ctx.session.user.id,
        },
      })
    }),
})
