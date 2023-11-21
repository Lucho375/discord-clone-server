import z from 'zod'

export interface ILoginUserDto {
  email: string
  password: string
}

/**
 * Represents a Data Transfer Object (DTO) for user authentication.
 * This class is responsible for validating and creating instances of user authentication data.
 */
export class LoginUserDto {
  public email: string
  public password: string

  private constructor({ email, password }: ILoginUserDto) {
    this.email = email
    this.password = password
  }

  /**
   * Creates an instance of LoginUserDto by validating the input data.
   * @param {ILoginUserDto} loginUserDto - User registration data to be validated and used for instantiation.
   * @returns {ILoginUserDto} - Instance of LoginUserDto.
   * @throws {ZodError} - Throws an error if the input data is invalid.
   */

  static create(loginUserDto: ILoginUserDto): LoginUserDto {
    const validation = z
      .object({
        email: z.string().email(),
        password: z.string()
      })
      .parse(loginUserDto)

    return new LoginUserDto(validation)
  }
}
