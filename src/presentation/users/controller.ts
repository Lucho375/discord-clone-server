import { type UserRepository } from '../../domain/users/userRepository.js'
import { type NextFunction, type Request, type Response } from 'express'

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = this.userRepository.getAll()
      res.status(200).send({ payload: users })
    } catch (error) {
      next(error)
    }
  }

  async getOne(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = this.userRepository.getOne(_req.body.id)
      res.send({ payload: user })
    } catch (error) {
      next(error)
    }
  }

  async createOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = req.body
      const createdUser = this.userRepository.createOne(data)
      res.send({ payload: createdUser })
    } catch (error) {
      next(error)
    }
  }

  async updateOne(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.send('ok')
      return this.userRepository.getAll()
    } catch (error) {
      next(error)
    }
  }

  async deleteOne(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.send('ok')
      return this.userRepository.getAll()
    } catch (error) {
      next(error)
    }
  }
}
