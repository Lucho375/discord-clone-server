import { Logger } from './infrastructure/logger/Logger'
import { AppExpress } from './presentation/application/AppExpress'
import { AppRouter } from './presentation/application/AppRouter'
import { SocketHandler } from './presentation/application/SocketHandler'
import AppConfig from './config'

async function startServer(): Promise<void> {
  try {
    const config = new AppConfig({})
    const server = new AppExpress({ port: config.getServerPort(), routes: AppRouter.routes })
    server.listen()
    const socketServer = new SocketHandler({ httpServer: server.getListener()!, port: config.getSocketPort() }) //eslint-disable-line
    socketServer.listen()
  } catch (error) {
    await Logger(error)
    console.error('Error initializing server: ', error)
    process.exit(1)
  }
}

void startServer()
