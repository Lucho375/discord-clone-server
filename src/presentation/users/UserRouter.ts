import { Router } from 'express'
import { MongooseUserDatasource } from '../../infrastructure/datasources/mongo-user.datasource.js'
import { UserRepositoryImpl } from '../../infrastructure/repositories/user.repository.impl.js'
import { UserController } from './controller.js' // eslint-disable-line

export class UserRouter {
  static get routes(): Router {
    const router = Router()

    const datasource = new MongooseUserDatasource()
    const repository = new UserRepositoryImpl(datasource)
    const controller = new UserController(repository)

    // prettier-ignore
    router
      .post('/', controller.createOne)
      .get('/', controller.getAll)
      .get('/:id', controller.getOne)
      .put('/:id', controller.updateOne)
      .delete('/:id', controller.deleteOne)

    return router
  }
}
