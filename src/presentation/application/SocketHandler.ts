import { Server, type Socket } from 'socket.io'
import { type ISocketHandler } from '../../interfaces/ISocketHandler.js'

export class SocketHandler {
  private readonly io: Server
  private readonly port

  constructor({ httpServer, port }: ISocketHandler) {
    this.io = new Server(httpServer)
    this.port = port
    this.attachEventHandlers()
  }

  private attachEventHandlers(): void {
    this.io.on('connection', (socket: Socket) => {
      this.handleSocketConnection(socket)
    })
  }

  private handleSocketConnection(socket: Socket): void {
    socket.on('message', (message: string) => {
      console.log(message)
      this.io.emit('message', 'message from server')
    })
  }

  public listen(): void {
    this.io.listen(this.port)
  }

  public close(): void {
    this.io.close()
  }
}
