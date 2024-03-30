import {DeletePedidosServices} from "./Delete.Pedidos.Services.js"
class DeletePedidosController{
  handle(request,response){
    try{
      const deletePedidosServices = new DeletePedidosServices()
      return response.status(200).json(deletePedidosServices.execute(request))
    }catch(err){
      return response.status(400).json({
        message:err.message
      })
    }
  }
}
export {DeletePedidosController}