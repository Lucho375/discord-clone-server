import { type NextFunction, type Request, type Response } from 'express'
import { ZodError } from 'zod'
import { Logger } from '../../infrastructure/logger/Logger.js'
import { CustomError } from '../../presentation/error/CustomError.js'

export default async function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<Response<any, Record<string, any>>> {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.message)
  }

  if (err instanceof ZodError) {
    return res.status(400).send(err)
  }

  await Logger(err)
  return res.status(500).send('Internal Server Error')
}
