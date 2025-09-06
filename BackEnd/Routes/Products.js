import express from "express"
import { CreatedUserproduct } from "../controller/postingProducts.js"
import { updating } from "../controller/pdatingProduct.js"
import { deleteP } from "../controller/deletingProduct.js"
import { speUserProd } from "../controller/getUserProf.js"
import { allUserProds } from "../controller/getALLusers.js"

const prodRouter = express.Router()

prodRouter.post("/create/:uID", CreatedUserproduct)
prodRouter.post("/update/:pid", updating)
prodRouter.delete('/Delete/:did',deleteP)
prodRouter.get('/getIprod/:uID',speUserProd)
prodRouter.get('/getALLprod/',allUserProds)

export default prodRouter