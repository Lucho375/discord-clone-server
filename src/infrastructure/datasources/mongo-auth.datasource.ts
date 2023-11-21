import { type LoginUserDto } from '../../domain/dtos/LoginUserDto.js'
import { type AuthDatasource } from '../../domain/datasources/auth.datasource.js'
import { userModel } from '../../data/models/userModel.js'
import { CustomError } from '../../presentation/error/CustomError.js'
import { BcryptAdapter } from '../../infrastructure/security/bcryptAdapter.js'
import { JwtAdapter } from '../../infrastructure/auth/jwtAdapter.js'

export class MongooseAuthDatasource implements AuthDatasource {
  constructor(
    private readonly isValidHash = BcryptAdapter.isValidHash,
    private readonly generateToken = JwtAdapter.generateToken
  ) {}

  login = async (credentials: LoginUserDto): Promise<string> => {
    const user = await userModel.findOne({ email: credentials.email })

    if (user === null) {
      CustomError.unauthorized('User doesnt exists')
    }

    const isValidPassword = await this.isValidHash(credentials.password, user.password)

    if (!isValidPassword) {
      CustomError.unauthorized('Invalid password')
    }

    const token = await this.generateToken({ email: user.email })

    if (token === null) {
      CustomError.internalServer('Failed to generate token')
    }

    return token
  }
}
