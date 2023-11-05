import { type Router } from 'express'

export interface IAppExpressOptions {
  port: number
  routes: Router
}
