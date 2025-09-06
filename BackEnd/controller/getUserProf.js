import { Authuser } from "../model/Authmodel.js";
import { prodModel } from "../model/productModel.js";

export const speUserProd = async (req, res) => {
  try {
    const uID = req.params.uID;
    console.log('req.params, uID  ',req.params, uID);
    console.log(uID);
    
    const ifExist = await Authuser.findById(uID)
    // console.log(ifExist);

    if (!ifExist) {
      return res.status(404).json({ sucess: false })
    }
    const prodts = await prodModel.find({ userID: uID })
    // console.log(prodts);

    return res.status(200).json({ suces: true, message: 'found its prod' + uID, prodts })

  } catch (error) {
    console.error('this is error ', error);

  }
}