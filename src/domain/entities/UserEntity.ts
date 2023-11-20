interface IUserEntity {
  id: string
  userName: string
  displayName: string
  password: string
  email: string
  updatedAt: Date
  createdAt: Date
}

export class UserEntity {
  public id: string
  public createdAt: Date
  public displayName: string
  public email: string
  public password: string
  public updatedAt: Date
  public userName: string

  constructor({ id, createdAt, displayName, email, password, updatedAt, userName }: IUserEntity) {
    this.id = id
    this.createdAt = createdAt
    this.displayName = displayName
    this.email = email
    this.password = password
    this.updatedAt = updatedAt
    this.userName = userName
  }
}
