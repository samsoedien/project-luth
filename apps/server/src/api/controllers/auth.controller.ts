import { type RequestHandler } from 'express'

import { compareSync, hashSync } from 'bcrypt'

import jwt from 'jsonwebtoken'

import { prisma } from '../../config/prisma'

export const signup: RequestHandler = async (req, res): Promise<void> => {
  const { email, password, name } = req.body

  let user = await prisma.user.findFirst({ where: { email } })

  if (user) throw Error('User already exists')

  console.log('test', password)

  user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashSync(password, 10),
    },
  })

  res.json(user)
}

export const signin: RequestHandler = async (req, res): Promise<void> => {
  const { email, password } = req.body

  const user = await prisma.user.findFirst({ where: { email } })

  if (!user) throw Error('User does not exist ')

  if (!compareSync(password, user.password)) throw Error('Invalid password')

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!)

  res.json({ user, token })
}

export const signedInUser: RequestHandler = async (req, res, next) => {
  try {
    return res.status(200).json(req.user)
  } catch (err) {
    return next(err)
  }
}