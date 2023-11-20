import dotenv from 'dotenv'

interface IAppConfig {
  path?: string
}

class AppConfig {
  constructor({ path = '.env' }: IAppConfig) {
    dotenv.config({ path })
    this.validateEnvironmentVariables()
  }

  private validateEnvironmentVariables(): void {
    const requiredVariables = ['SERVER_PORT', 'SOCKET_PORT']

    for (const variable of requiredVariables) {
      if (process.env[variable] === undefined) {
        throw new Error(`Missing ${variable} environment variable`)
      }
    }
  }

  public getServerPort(): number {
    const port = process.env.SERVER_PORT
    if (isNaN(Number(port))) throw new Error("Invalid 'SERVER_PORT' environment variable")
    return Number(port)
  }

  public getSocketPort(): number {
    const port = process.env.SOCKET_PORT
    if (isNaN(Number(port))) throw new Error("Invalid 'SOCKET_PORT' environment variable")
    return Number(port)
  }

  public getDatabaseUri(): string {
    const uri = process.env.DB_URI
    if (uri === undefined) throw new Error("Missing 'DB_URI' environment variable")
    return uri
  }

  public getJwtSecret(): string {
    const secret = process.env.JWT_SECRET
    if (secret === undefined) throw new Error("Missing 'JWT_SECRET' environment variable")
    return secret
  }
}

export default AppConfig
