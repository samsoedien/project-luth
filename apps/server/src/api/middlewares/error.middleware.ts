import { type Request, type Response, type NextFunction } from 'express'

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ message: err.message })
}

export default errorMiddleware
