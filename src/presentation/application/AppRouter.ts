import { Router } from 'express'
import { UserRouter } from '../users/UserRouter.js'
import { AuthRouter } from '../../presentation/auth/AuthRouter.js'

export class AppRouter {
  static get routes(): Router {
    const router = Router()

    // prettier-ignore
    router
      .use('/api/auth', AuthRouter.routes)
      .use('/api/users', UserRouter.routes)

    return router
  }
}
