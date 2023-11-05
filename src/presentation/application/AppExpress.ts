import express, { json, urlencoded, type Express } from 'express'
import { type IncomingMessage, type Server, type ServerResponse } from 'http'
import { type IAppExpressOptions } from '../../interfaces/IAppExpressOptions.js'
import errorHandler from '../middlewares/errorHandler'

export class AppExpress {
  private readonly port
  private readonly routes
  private readonly app: Express
  private serverListener: Server<typeof IncomingMessage, typeof ServerResponse> | undefined = undefined

  constructor({ port, routes }: IAppExpressOptions) {
    this.port = port
    this.routes = routes
    this.app = express()
    this.setupMiddlewares()
    this.setupRoutes()
    this.setupErrorHandlers()
  }

  private setupMiddlewares(): void {
    this.app.use(json())
    this.app.use(urlencoded({ extended: true }))
  }

  private setupRoutes(): void {
    this.app.use(this.routes)
  }

  private setupErrorHandlers(): void {
    this.app.use(errorHandler)
  }

  public getListener(): Server<typeof IncomingMessage, typeof ServerResponse> | undefined {
    return this.serverListener
  }

  public getApp(): Express {
    return this.app
  }

  public listen(): void {
    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on ${this.port}`)
    })
  }

  public close(): void {
    this.serverListener?.close()
    this.serverListener = undefined
  }
}
