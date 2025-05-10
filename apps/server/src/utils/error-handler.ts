// TODO: Unused file revise error handling

import { error } from 'console'
import { type NextFunction } from 'express'
import { ZodError } from 'zod'

class HttpException extends Error {}

export const errorHandler = (method: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await method(req, res, next)
    } catch (err) {
      let exception: HttpException

      if (err instanceof HttpException) {
        exception = err
      } else if (err instanceof ZodError) {
        exception = new HttpException('Internal server error')
      }

      next(error)
    }
  }
}
