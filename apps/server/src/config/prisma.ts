import { PrismaClient } from '@prisma/client'
// import { PrismaClient } from '../../prisma/generated/client'
import { SignUpSchema } from '../api/schemas/auth.schema'

export const prisma = new PrismaClient({
  log: ['query'],
}).$extends({
  query: {
    user: {
      create({ args, query }) {
        args.data = SignUpSchema.parse(args.data)
        return query(args)
      },
    },
  },
})
