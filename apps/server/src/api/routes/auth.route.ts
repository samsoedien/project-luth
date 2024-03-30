import { Router } from 'express'

import * as authController from '../controllers/auth.controller'
import authMiddleware from '../middlewares/auth.middleware'

const authRoutes = Router()

authRoutes.post('/signup', authController.signup)
authRoutes.post('/signin', authController.signin)
authRoutes.get('/me', [authMiddleware], authController.signedInUser)

export default authRoutes
