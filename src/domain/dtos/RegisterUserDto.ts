import z from 'zod'

export interface IRegisterUserDto {
  dateBirth: Date
  displayName: string
  email: string
  password: string
  userName: string
}

/**
 * Represents a Data Transfer Object (DTO) for user registration.
 * This class is responsible for validating and creating instances of user registration data.
 */
export class RegisterUserDto {
  public dateBirth: Date
  public displayName: string
  public email: string
  public password: string
  public userName: string

  private constructor({ dateBirth, displayName, email, password, userName }: IRegisterUserDto) {
    this.dateBirth = dateBirth
    this.displayName = displayName
    this.email = email
    this.password = password
    this.userName = userName
  }

  /**
   * Creates an instance of RegisterUserDto by validating the input data.
   * @param {IRegisterUserDto} registerUserData - User registration data to be validated and used for instantiation.
   * @returns {RegisterUserDto} - Instance of RegisterUserDto.
   * @throws {ZodError} - Throws an error if the input data is invalid.
   */

  static create(registerUserData: IRegisterUserDto): RegisterUserDto {
    const validated = z
      .object({
        dateBirth: z.date(),
        displayName: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
        userName: z.string()
      })
      .parse(registerUserData)

    return new RegisterUserDto(validated)
  }
}
