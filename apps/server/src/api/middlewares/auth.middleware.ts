import { type RequestHandler } from 'express'

import jwt from 'jsonwebtoken'
import { prisma } from '../../config/prisma'

const authMiddleware: RequestHandler = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!)
    const user = await prisma.user.findFirst({ where: { id: (payload as any).userId } })

    if (!user) return res.status(401).json({ message: 'Unauthorized' })

    req.user = user as any
    next()
  } catch (err) {
    next(err)
  }
}

export default authMiddleware
