import { Router } from 'express'
import { UserRouter } from '../users/UserRouter.js'

export class AppRouter {
  static get routes(): Router {
    const router = Router()

    router.use('/api/users', UserRouter.routes)

    return router
  }
}
