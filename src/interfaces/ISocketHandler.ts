import { type Server } from 'http'

export interface ISocketHandler {
  httpServer: Server
  port: number
}
