// import { type User } from '@prisma/client'
import { type User } from '../../prisma/generated/client'

declare global {
  namespace Express {
    export interface Request {
      user?: User
    }
  }
}
