import { type NextFunction, type Request, type Response } from 'express'
import { RegisterUserDto } from '../../domain/dtos/RegisterUserDto.js'
import { type UserRepository } from '../../domain/repositories/user.repository.js'

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await this.userRepository.getAll()
      res.status(200).send({ payload: users })
    } catch (error) {
      next(error)
    }
  }

  getOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await this.userRepository.getOne(req.params.id)
      res.send({ payload: user })
    } catch (error) {
      next(error)
    }
  }

  createOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const registerDto = RegisterUserDto.create(req.body)
      const createdUser = await this.userRepository.createOne(registerDto)
      res.send({ payload: createdUser })
    } catch (error) {
      next(error)
    }
  }

  updateOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const update = req.body
      const updatedUser = await this.userRepository.updateOne(req.params.id, update)
      res.send({ payload: updatedUser })
    } catch (error) {
      next(error)
    }
  }

  deleteOne = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const deletedUser = this.userRepository.deleteOne(req.params.id)
      res.send({ payload: deletedUser })
    } catch (error) {
      next(error)
    }
  }
}
