import { type NextFunction, type Request, type Response } from 'express'
import { Logger } from '../../infrastructure/logger/Logger.js'
import { CustomError } from '../../presentation/error/CustomError.js'

export default async function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Promise<Response<any, Record<string, any>>> {
  await Logger(err)
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send(err.message)
  }
  return res.status(500).send('Internal Server Error')
}
