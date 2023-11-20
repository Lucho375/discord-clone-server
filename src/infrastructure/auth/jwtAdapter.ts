import jwt from 'jsonwebtoken'
import AppConfig from '../../config/index.js'

export class JwtAdapter {
  private static readonly SECRET: string = new AppConfig({}).getJwtSecret()

  static async generateToken(payload: Record<string, unknown>, duration: string = '1hr'): Promise<null | string> {
    return new Promise(resolve => {
      jwt.sign(payload, JwtAdapter.SECRET, { expiresIn: duration }, (err, token) => {
        if (err !== null) {
          resolve(null)
          return
        }
        resolve(token as string)
      })
    })
  }

  static async verifyToken(token: string): Promise<null | Record<string, unknown>> {
    return new Promise(resolve => {
      jwt.verify(token, JwtAdapter.SECRET, (err, decoded) => {
        if (err !== null) {
          resolve(null)
          return
        }
        resolve(decoded as Record<string, unknown>)
      })
    })
  }
}
