interface IUserEntity {
  id: string
  userName: string
  displayName: string
  email: string
  updatedAt: Date
  createdAt: Date
  dateBirth: Date
}

export class UserEntity {
  public id: string
  public createdAt: Date
  public displayName: string
  public email: string
  public updatedAt: Date
  public userName: string
  public dateBirth: Date

  constructor({ id, createdAt, dateBirth, displayName, email, updatedAt, userName }: IUserEntity) {
    this.id = id
    this.createdAt = createdAt
    this.dateBirth = dateBirth
    this.displayName = displayName
    this.email = email
    this.updatedAt = updatedAt
    this.userName = userName
  }
}
