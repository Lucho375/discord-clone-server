export class CustomError extends Error {
  private constructor(public readonly message: string, public readonly statusCode: number) {
    super(message)
  }

  static badRequest(message: string = 'Bad Request'): void {
    throw new CustomError(message, 400)
  }

  static unauthorized(message: string = 'Unauthorized'): void {
    throw new CustomError(message, 401)
  }

  static forbidden(message: string = 'Forbidden'): void {
    throw new CustomError(message, 403)
  }

  static notFound(message: string = 'Not found'): void {
    throw new CustomError(message, 404)
  }

  static internalServer(message: string = 'Internal Server Error'): void {
    throw new CustomError(message, 500)
  }
}
