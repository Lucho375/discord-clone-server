import { Router } from 'express'
import { MongooseAuthDatasource } from '../../infrastructure/datasources/mongo-auth.datasource.js'
import { AuthRepositoryImpl } from '../../infrastructure/repositories/auth.repository.impl.js'
import { AuthController } from './controller.js'

export class AuthRouter {
  static get routes(): Router {
    const router = Router()

    const datasource = new MongooseAuthDatasource()
    const repository = new AuthRepositoryImpl(datasource)
    const controller = new AuthController(repository)

    // prettier-ignore
    router
      .post('/login', controller.login)

    return router
  }
}
