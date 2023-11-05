import { Router } from 'express'
import { AppExpress } from '../presentation/application/AppExpress'
import { type AddressInfo } from 'net'

const port = 8080
let app: AppExpress

beforeEach(() => {
  app = new AppExpress({ port, routes: Router() })
  app.listen()
})

afterEach(() => {
  app.close()
})

describe('AppExpress', () => {
  it('Should create an instance of AppExpress', () => {
    expect(app).toBeInstanceOf(AppExpress)
  })

  it('Should listen for port 8080', () => {
    const listener = app.getListener()
    const address = listener?.address() as string | AddressInfo
    if (typeof address !== 'string') {
      const { port: listeningPort } = address
      expect(listeningPort).toEqual(port)
    }
  })

  it('Should close the server', () => {
    app.close()
    expect(app.getListener()).toBeUndefined()
  })
})
