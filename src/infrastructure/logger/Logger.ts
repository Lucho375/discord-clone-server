import fs from 'fs'
import fsp from 'fs/promises'
import path from 'path'
import { v4 } from 'uuid'

const logDirectory = path.resolve('src', 'logs')

export async function Logger(message: any): Promise<void> {
  if (!fs.existsSync(logDirectory)) {
    await fsp.mkdir(logDirectory)
  }
  const date = new Date()
  const formattedMessage = `[${date.toLocaleString()}] - ${v4()} ${message} \n`
  await fsp.appendFile(path.resolve('src', 'logs', 'logs.log'), formattedMessage, { encoding: 'utf-8' })
}
