import { Router } from 'express'

import * as postController from '../controllers/posts.controller'
import authMiddleware from '../middlewares/auth.middleware'

const router = Router()

router.get('/', postController.getPosts)

router.get('/:id', postController.getPostById)

router.post('/', [authMiddleware], postController.createPost)

router.put('/:id', [authMiddleware], postController.updatePost)

router.delete('/:id', [authMiddleware], postController.deletePost)

export default router
