import { Router } from 'express'
// import { UserController } from './controller' // eslint-disable-line

export class UserRouter {
  static get routes(): Router {
    const router = Router()

    // const controller = new UserController()

    const controller = {
      createOne: () => {},
      getAll: () => {},
      getOne: () => {},
      updateOne: () => {},
      deleteOne: () => {}
    }

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
