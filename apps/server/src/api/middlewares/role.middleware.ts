import { type RequestHandler } from 'express'

const roleMiddleware: RequestHandler = (req, res, next) => {
  const { user } = req

  if (!user) return res.status(401).json({ message: 'Unauthorized' })

  if (user.role === 'ADMIN') {
    next()
  } else return res.status(403).json({ message: 'Forbidden, only admins can access this resource' })
}

export default roleMiddleware
