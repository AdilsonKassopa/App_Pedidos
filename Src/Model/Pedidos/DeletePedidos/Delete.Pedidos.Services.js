import {PedidosRepository} from "../Pedidos.Repository.js"

class DeletePedidosServices{
  execute(data){
    const {Idpedidos} = data.params
    const pedidosRepository = new PedidosRepository()
    const pedidos = pedidosRepository.getPedidos()
    const index = pedidos.findIndex((element)=> element.id === Idpedidos)
    if(index < 0)
    throw new Error("pedido Não encontrado")
    pedidos.splice(index, 1)
    return pedidosRepository.deletePedidos(pedidos)
  }
}
export {DeletePedidosServices}