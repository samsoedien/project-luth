import { Router } from 'express'

import * as productController from '../controllers/products.controller'
// import productValidation from '../validations/products.validation'
import roleMiddleware from '../middlewares/role.middleware'
import authMiddleware from '../middlewares/auth.middleware'

const router = Router()

router.get('', productController.getProducts)

router.get('/:id', productController.getProductById)

router.post('/', [authMiddleware, roleMiddleware], productController.createProduct)

router.put('/:id', [authMiddleware, roleMiddleware], productController.updateProduct)

router.delete('/:id', [authMiddleware, roleMiddleware], productController.deleteProduct)

export default router
