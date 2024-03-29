import {PedidosRepository} from "../Pedidos.Repository.js"

class UpdateServices{
   execute(data){
     const {productId,Idproduct} = data.params
     const pedidosRepository = new PedidosRepository()
     const pedidos = pedidosRepository.getPedidos()
     const index = pedidos.findIndex((element)=> element.id === Idproduct)
     if(index < 0){
       throw new Error("pedido não encontrado")
     }
     pedidos[index] ={
       ...pedidos[index],
       productId
     }
     return pedidosRepository.updatePedidos(pedidos)
     
   }
}

export {UpdateServices}