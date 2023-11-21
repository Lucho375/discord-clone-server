import { type LoginUserDto } from '../../domain/dtos/LoginUserDto.js'
import { type AuthDatasource } from '../../domain/datasources/auth.datasource.js'
import { type AuthRepository } from '../../domain/repositories/auth.repository.js'

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  login = async (credentials: LoginUserDto): Promise<string> => {
    return this.authDatasource.login(credentials)
  }
}
