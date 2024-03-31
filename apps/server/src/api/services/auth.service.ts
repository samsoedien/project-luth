import { User } from '@prisma/client'
import jwt from 'jsonwebtoken'

export const createJwtToken = (user: any): string =>
  jwt.sign({ userId: user.id }, process.env.JWT_SECRET!)
