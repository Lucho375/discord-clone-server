import { type LoginUserDto } from '../../domain/dtos/LoginUserDto.js'

export abstract class AuthDatasource {
  abstract login(credentials: LoginUserDto): Promise<string>
}
