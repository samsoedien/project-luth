import { type RequestHandler } from 'express'

import { prisma } from '../../config/prisma'

export const getUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany()

    return res.status(200).json({ message: 'success', data: users, count: users.length })
  } catch (err) {
    return next(err)
  }
}

export const getUserById: RequestHandler = async (req, res, next) => {
  try {
    const user = await prisma.user.findFirst({ where: { id: req.params.id } })

    if (!user) return res.status(404).json({ message: 'Resource not found.' })

    return res.status(200).json({ message: 'success', data: user })
  } catch (err) {
    return next(err)
  }
}
