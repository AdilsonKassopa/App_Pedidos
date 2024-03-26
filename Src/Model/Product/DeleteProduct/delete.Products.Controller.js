import {DeleteProductsServices} from "./delete.Products.Services.js"
class DeleteProductController{
  handle(request,response){
    try{
    const deleteProductServices = new DeleteProductsServices()
    return response.status(200).json(deleteProductServices.execute(request))
    }catch(err){
     return response.status(400).json({
       message:err.message
     })
    }
  }
}
export {DeleteProductController}