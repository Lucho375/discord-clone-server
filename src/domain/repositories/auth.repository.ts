import { type LoginUserDto } from '../../domain/dtos/LoginUserDto.js'

export abstract class AuthRepository {
  abstract login(credentials: LoginUserDto): Promise<string>
}
