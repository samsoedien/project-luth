import { type RequestHandler } from 'express'
import { validationResult } from 'express-validator'

import { prisma } from '../../config/prisma'
import { PostSchema } from '../schemas/post.schema'

export const getPosts: RequestHandler = async (req, res, next) => {
  try {
    const posts = await prisma.post.findMany()

    return res.status(200).json(posts)
  } catch (err) {
    return next(err)
  }
}

export const getPostById: RequestHandler = async (req, res, next) => {
  try {
    const post = await prisma.post.findFirst({ where: { id: req.params.id } })

    if (!post) return res.status(400).json({ success: false })

    return res.status(200).json({ success: true, data: post })
  } catch (err) {
    return next(err)
  }
}

export const createPost: RequestHandler = async (req, res, next) => {
  PostSchema.parse(req.body)
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    if (!req.user) return res.status(401).json({ message: 'Unauthorized' })

    const post = await prisma.post.create({ data: { ...req.body, authorId: req.user.id } })

    return res.status(201).json({ success: true, data: post })
  } catch (err) {
    return next(err)
  }
}

export const updatePost: RequestHandler = async (req, res, next) => {
  try {
    const post = await prisma.post.findFirst({ where: { id: req.params.id } })

    if (!post) return res.status(404).json({ message: 'Resource not found.' })

    const result = await prisma.post.update({ where: { id: req.params.id }, data: req.body })

    return res.status(200).json({ message: 'success', data: result })
  } catch (err) {
    return next(err)
  }
}

export const deletePost: RequestHandler = async (req, res, next) => {
  try {
    const post = await prisma.post.findFirst({ where: { id: req.params.id } })

    if (!post) return res.status(404).json({ message: 'Resource not found.' })

    const deletedPost = await prisma.post.delete({ where: { id: req.params.id } })

    return res.status(200).json({ message: 'success', data: deletedPost })
  } catch (err) {
    return next(err)
  }
}
