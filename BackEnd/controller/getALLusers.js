import { Authuser } from "../model/Authmodel.js";
import { prodModel } from "../model/productModel.js";

export const allUserProds = async (req, res) => {
  try {
    const ifExist = await prodModel.find({})
    // console.log(ifExist);

    if (!ifExist) {
      return res.status(404).json({ sucess: false })
    }
    

    return res.status(200).json({ suces: true, message: 'found all prod', products: ifExist })

  } catch (error) {
    console.error('this is error ', error);

  }
}