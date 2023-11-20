import mongoose from 'mongoose'

export class MongooseAdapter {
  private connection!: typeof mongoose
  constructor(private readonly uri: string) {}

  public async connect(): Promise<void> {
    this.connection = await mongoose.connect(this.uri)
    console.log('Database connected')
  }

  public async disconnect(): Promise<void> {
    await this.connection?.disconnect()
    console.log('Database disconnected')
  }
}
