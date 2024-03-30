import { type RequestHandler } from 'express'
import { validationResult } from 'express-validator'

import { prisma } from '../../config/prisma'

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany()

    return res.status(200).json({ message: 'success', data: products, count: products.length })
  } catch (err) {
    return next(err)
  }
}

export const getProductById: RequestHandler = async (req, res, next) => {
  try {
    const product = await prisma.product.findFirst({ where: { id: req.params.id } })

    if (!product) return res.status(404).json({ message: 'Resource not found.' })

    return res.status(200).json({ message: 'success', data: product })
  } catch (err) {
    return next(err)
  }
}

export const postProduct: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }

    const product = await prisma.product.create({ data: req.body })

    return res.status(201).json({ message: 'success', data: product })
  } catch (err) {
    return next(err)
  }
}

export const updateProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = await prisma.product.findFirst({ where: { id: req.params.id } })

    if (!product) return res.status(404).json({ message: 'Resource not found.' })

    const result = await prisma.product.update({ where: { id: req.params.id }, data: req.body })

    return res.status(200).json({ message: 'success', data: result })
  } catch (err) {
    return next(err)
  }
}

export const deleteProduct: RequestHandler = async (req, res, next) => {
  try {
    const product = await prisma.product.findFirst({ where: { id: req.params.id } })

    if (!product) return res.status(404).json({ message: 'Resource not found.' })

    const deletedProduct = await prisma.product.delete({ where: { id: req.params.id } })

    return res.status(200).json({ message: 'success', data: deletedProduct })
  } catch (err) {
    return next(err)
  }
}
