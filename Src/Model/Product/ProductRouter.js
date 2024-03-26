import {Router} from "express"
import {CreateProductsController} from "./Create/Create.Products.Controller.js"
import {GetProductsController} from "./GetProducts/get.Products.Controller.js"
import {UpdateProductsController} from "./UpdateProduct/Update.Products.Controller.js"
import {DeleteProductController} from "./DeleteProduct/delete.Products.Controller.js"
const productRouter = Router()
const creatProductsController = new CreateProductsController()
const getProductsController = new GetProductsController()
const updateProductsController = new UpdateProductsController()
const deleteProductController = new DeleteProductController()

productRouter.post("/:name/:price",creatProductsController.handle)
productRouter.get("/",getProductsController.handle)
productRouter.put("/:name/:price/:id",updateProductsController.handle)
productRouter.delete("/:id",deleteProductController.handle)

export {productRouter}