import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    displayName: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      index: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    dateBirth: {
      type: Date,
      required: true
    },
    friends: {
      type: [Schema.Types.ObjectId],
      required: false
    },
    servers: {
      type: [Schema.Types.ObjectId],
      required: false
    }
  },
  {
    timestamps: true
  }
)

export const userModel = model('User', userSchema)
