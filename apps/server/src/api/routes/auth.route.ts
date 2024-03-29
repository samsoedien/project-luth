import { Router } from 'express'

import * as authController from '../controllers/auth.controller'

const authRoutes = Router()

authRoutes.post('/signup', authController.signup)
authRoutes.post('/signin', authController.signin)

export default authRoutes
