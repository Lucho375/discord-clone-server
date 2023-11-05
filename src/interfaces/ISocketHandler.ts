import { type Server as httpServer } from 'http'

export interface ISocketHandler {
  httpServer: httpServer
  port: number
}
