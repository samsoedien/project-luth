import { type RequestHandler } from 'express'
import { prisma } from '../../config/prisma'

export const getCartItems: RequestHandler = async (req, res, next) => {}

export const getCartItemById: RequestHandler = async (req, res, next) => {}

export const addItemToCart: RequestHandler = async (req, res, next) => {
  try {
    const product = await prisma.product.findFirst({ where: { id: req.body.productId } })
    // const posts = await prisma.cartItem.findMany()

    if (!product) return res.status(404).json({ message: 'Product not found' })

    const cart = await prisma.cartItem.create({
      data: {
        userId: req.user?.id,
        productId: product.id,
        ...req.body,
      },
    })
    return res.status(200).json({ success: true, data: cart })
  } catch (err) {
    return next(err)
  }
}
