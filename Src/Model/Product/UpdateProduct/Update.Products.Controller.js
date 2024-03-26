import {UpdateProductsServices} from "./Update.Products.Services.js"
class UpdateProductsController{
  handle(request,response){
    try{
      const updateProductsServices = new UpdateProductsServices()
      return response.status(200).json(updateProductsServices.execute(request))
    }catch(err){
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
export {UpdateProductsController}