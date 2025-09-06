import mongoose from "mongoose";

const AuthSchemma = mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },

},
  {
    timestamps: true
  })

export const Authuser = mongoose.model('registr', AuthSchemma)