import { body } from 'express-validator'

const productValidation = body('name', 'Name is required').not().isEmpty()

export default productValidation
