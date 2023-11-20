import { type UserDatasource } from '../../domain/datasources/user.datasource.js'
import { type IRegisterUserDto } from '../../domain/dtos/RegisterUserDto.js'
import { type UserEntity } from '../../domain/entities/UserEntity.js'
import { type UserRepository } from '../../domain/repositories/user.repository.js'

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {}

  createOne = async (regiserUser: IRegisterUserDto): Promise<UserEntity> => {
    return this.userDatasource.createOne(regiserUser)
  }

  deleteOne = async (id: string): Promise<UserEntity | null> => {
    return this.userDatasource.deleteOne(id)
  }

  getAll = async (): Promise<UserEntity[]> => {
    return this.userDatasource.getAll()
  }

  getOne = async (id: string): Promise<UserEntity | null> => {
    return this.userDatasource.getOne(id)
  }

  updateOne = async (id: string, update: Partial<UserEntity>): Promise<UserEntity | null> => {
    return this.userDatasource.updateOne(id, update)
  }
}
