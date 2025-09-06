import { prodModel } from "../model/productModel.js";

export const updating = async (req, res) => {
  try {
    const pID = req.params.pid; //& uID which menciond before this /part 
    console.log(pID);
    const { title, description, img_url,price ,quantity  } = req.body
    const FoundUser = await prodModel.findById(pID);
    // console.log(FoundUser);

    if (!FoundUser) {
      return res.status(404).json({ sucess: false, message: 'not taht user' })
    }
    
    const updation = await prodModel.findByIdAndUpdate(
       pID ,
      { $set: { title, description, img_url,price ,quantity  } },
      { new: true }
    );
    
    res.status(200).json({ 
      success: true, 
      message: 'Update successful', 
      data: updation 
    });

  } catch (error) {
    console.error('this is error : ', error.message);

  }
}



