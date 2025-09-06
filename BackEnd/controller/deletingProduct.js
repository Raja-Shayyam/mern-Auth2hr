import { prodModel } from "../model/productModel.js";

export const deleteP = async (req, res) => {
  try {
    const pID = req.params.did; //& uID which menciond before this /part 
    const FoundProd = await prodModel.findById(pID);
    if (!FoundProd) {
      return res.status(404).json({ sucess: false, message: 'not taht user' })
    }
    const deletedNow = await prodModel.findByIdAndDelete(pID)
    res.status(200).json({ sucess: true, message: 'deleted product', d:deletedNow })

  } catch (error) {
    console.error('this is error : ', error.message);
  }
}