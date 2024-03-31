import { Router } from 'express'

import * as cartController from '../controllers/cart.controller'
import authMiddleware from '../middlewares/auth.middleware'

const router = Router()

router.post('', [authMiddleware], cartController.addItemToCart)

export default router
