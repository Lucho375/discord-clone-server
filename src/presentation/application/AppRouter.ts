import { type Request, type Response, Router } from 'express'

export class AppRouter {
  static get routes(): Router {
    const router = Router()

    router.get('/', (_req: Request, res: Response, _next) => {
      res.status(200).send('AppRoutes working')
    })

    return router
  }
}
