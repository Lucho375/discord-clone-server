import fsp from 'fs/promises'
import path from 'path'
import AppConfig from '../config'

const envTestPath = path.resolve('src', '__tests__', '.env')
const SERVER_PORT = 8080
const SOCKET_PORT = 3000

beforeAll(async () => {
  await fsp.writeFile(envTestPath, `SERVER_PORT=${SERVER_PORT}\nSOCKET_PORT=${SOCKET_PORT}`)
})

afterAll(async () => {
  await fsp.rm(envTestPath)
})

describe('AppConfig', () => {
  it('Should throw an error validating environment variables', () => {
    expect(() => new AppConfig({ path: 'incorrect.env' })).toThrow()
  })

  it('Should create an instance of AppConfig', () => {
    const appConfig = new AppConfig({ path: envTestPath })
    expect(appConfig).toBeInstanceOf(AppConfig)
  })

  it('SERVER_PORT and SOCKET_PORT should be defined', () => {
    const appConfig = new AppConfig({ path: envTestPath })
    const serverPort = appConfig.getServerPort()
    const socketPort = appConfig.getSocketPort()
    expect(socketPort).toBeDefined()
    expect(serverPort).toBeDefined()
  })

  it('SERVER_PORT and SOCKET_PORT should be numbers', () => {
    const appConfig = new AppConfig({ path: envTestPath })
    const serverPort = appConfig.getServerPort()
    const socketPort = appConfig.getSocketPort()
    expect(typeof socketPort).toBe('number')
    expect(typeof serverPort).toBe('number')
  })
})
