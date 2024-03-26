import {CreateProductsServices} from "./Create.Products.Services.js"
class CreateProductsController{
  handle(request,response){
    const {params} = request
    try{
      const createProductsServices = new CreateProductsServices()
      return response.status(200).json(createProductsServices.execute(params))
    }catch(err){
      return response.status(400).json({
        message:err.message
      })
    }
  }
}
export {CreateProductsController}