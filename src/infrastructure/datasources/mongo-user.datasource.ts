import { userModel } from '../../data/models/userModel.js'
import { type UserDatasource } from '../../domain/datasources/user.datasource.js'
import { type IRegisterUserDto } from '../../domain/dtos/RegisterUserDto.js'
import { UserEntity } from '../../domain/entities/UserEntity.js'
import { CustomError } from '../../presentation/error/CustomError.js'

export class MongooseUserDatasource implements UserDatasource {
  async createOne(registerUser: IRegisterUserDto): Promise<UserEntity> {
    const createdUser = await userModel.create(registerUser)
    return new UserEntity({ ...createdUser.toObject(), id: createdUser._id.toString() })
  }

  async deleteOne(id: string): Promise<UserEntity> {
    const deletedUser = await userModel.findByIdAndDelete({ _id: id }, { new: true })

    if (deletedUser === null) {
      CustomError.notFound(`User with id: '${id}' not found`)
    }

    return new UserEntity({ ...deletedUser.toObject(), id: deletedUser?._id.toString() })
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await userModel.find()
    return users.map(user => new UserEntity({ ...user.toObject(), id: user._id.toString() }))
  }

  async getOne(id: string): Promise<UserEntity | null> {
    const user = await userModel.findById({ _id: id })

    if (user === null) {
      CustomError.notFound(`User with id: '${id}' not found`)
    }

    return new UserEntity({ ...user.toObject(), id: user._id.toString() })
  }

  async updateOne(id: string, data: any): Promise<UserEntity> {
    const updatedUser = await userModel.findByIdAndUpdate({ _id: id, ...data }, { new: true })

    if (updatedUser === null) {
      CustomError.notFound(`User with id: '${id}' not found`)
    }

    return new UserEntity({ ...updatedUser.toObject(), id: updatedUser._id.toString() })
  }
}
