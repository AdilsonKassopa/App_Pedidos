import {CreatePedidosServices} from "./Create.Pedidos.Services.js"

class CreatePedidosController{
   handle(request,response){
     try{
       const createPedidosService = new CreatePedidosServices()
       return response.status(200).json(createPedidosService.execute(request))
     }catch(err){
       return response.status(400).json({
         message:err.message
       })
     }
   }
}
export {CreatePedidosController}