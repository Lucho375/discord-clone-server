import { type UserEntity } from 'domain/entities/UserEntity.js'
import { type IRegisterUserDto } from '../dtos/RegisterUserDto.js'

export abstract class UserRepository {
  abstract createOne(registerUser: IRegisterUserDto): Promise<UserEntity>

  abstract deleteOne(id: string): Promise<UserEntity | null>

  abstract getAll(): Promise<UserEntity[]>

  abstract getOne(id: string): Promise<UserEntity | null>

  abstract updateOne(id: string, update: Partial<IRegisterUserDto | null>): Promise<UserEntity | null>
}
