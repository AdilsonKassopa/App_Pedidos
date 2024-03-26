import {GetProductsServices} from "./get.Products.Services.js"
class GetProductsController{
  handle(request,response){
    try{
      const getProductsServices = new GetProductsServices()
     return response.status(200).json(getProductsServices.execute())
    }catch(err){
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
export {GetProductsController}