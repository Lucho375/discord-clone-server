import AppConfig from './config/index.js'
import { Logger } from './infrastructure/logger/Logger.js'
import { AppExpress } from './presentation/application/AppExpress.js'
import { AppRouter } from './presentation/application/AppRouter.js'
import { SocketHandler } from './presentation/application/SocketHandler.js'

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
