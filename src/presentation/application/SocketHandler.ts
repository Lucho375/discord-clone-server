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
    socket.on('message', data => {
      console.log(data)
      this.io.emit('message', 'message from server')
    })
    socket.on('nuevo', () => {
      console.log('nuevo')
    })

    // const eventHandlers: Record<string, (data: any) => void> = {
    //   create_room: room => this.roomManager.create(socket, room),
    //   join_room: room => this.roomManager.join(socket, room),
    // }
    // for (const eventName in eventHandlers) {
    //   socket.on(eventName, eventHandlers[eventName])
    // }
  }

  public listen(): void {
    this.io.listen(this.port)
  }
}
