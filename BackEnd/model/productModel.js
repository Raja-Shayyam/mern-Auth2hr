import mongoose from "mongoose";

const prodSchemma = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  img_url: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "registr"
  },

},
  {
    timestamps:true
  }
)

export const prodModel = mongoose.model('product',prodSchemma)