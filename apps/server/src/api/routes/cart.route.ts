import { Router } from 'express'

import * as cartController from '../controllers/cart.controller'
import authMiddleware from '../middlewares/auth.middleware'

const router = Router()

router.get('', cartController.getCart)

// router.get('/:id', cartController.getUserById)

export default router
