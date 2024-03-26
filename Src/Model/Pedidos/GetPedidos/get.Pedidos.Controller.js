import {GetPedidosServices} from "./get.Pedidos.Services.js"
class GetPedidosController{
  handle(request,response){
    try{
    const getPedidosServices = new GetPedidosServices()
    return response.status(200).json(getPedidosServices.execute())
    }catch(err){
      return response.status(400).json({
        message:err.message
      })
    }
  }
}
export {GetPedidosController}