import { type NextFunction, type Request, type Response } from 'express'
import { LoginUserDto } from '../../domain/dtos/LoginUserDto.js'
import { type AuthRepository } from '../../domain/repositories/auth.repository.js'

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const credentials = LoginUserDto.create(req.body)
      const token = await this.authRepository.login(credentials)
      res.status(200).send({ payload: token })
    } catch (error) {
      next(error)
    }
  }
}
