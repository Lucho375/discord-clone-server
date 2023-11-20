export class CustomError extends Error {
  private constructor(public readonly message: string, public readonly statusCode: number) {
    super(message)
  }

  static badRequest(message: string = 'Bad Request'): never {
    throw new CustomError(message, 400)
  }

  static unauthorized(message: string = 'Unauthorized'): never {
    throw new CustomError(message, 401)
  }

  static forbidden(message: string = 'Forbidden'): never {
    throw new CustomError(message, 403)
  }

  static notFound(message: string = 'Not found'): never {
    throw new CustomError(message, 404)
  }

  static internalServer(message: string = 'Internal Server Error'): never {
    throw new CustomError(message, 500)
  }
}
