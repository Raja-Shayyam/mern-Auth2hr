import { Authuser } from "../model/Authmodel.js";
import { prodModel } from "../model/productModel.js";


export const CreatedUserproduct = async (req, res) => {
  try {
    const uID = req.params.uID;
    console.log(req.params,uID);
    const ifExist = await Authuser.findById(uID)
    console.log(ifExist);
    
    if (!ifExist) {
      return res.status(404).json({ sucess: false })
    }
    const { title, description, img_url ,price ,quantity } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const createdProduct = await prodModel.create({
      title,
      description,
      img_url,
      price,
      quantity,
      userID: uID
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: createdProduct
    });

  } catch (error) {
    console.error("Error creating product:", error);
  }
};