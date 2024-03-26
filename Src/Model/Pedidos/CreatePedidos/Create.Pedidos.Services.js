import {PedidosRepository} from "../Pedidos.Repository.js"
import {ProductsRepository} from "../../Product/Products.Repository.js"
import {userId} from "../../Login/LoginUser/Login.User.Services.js"
class CreatePedidosServices{
  execute(data){
    const {productId} = data.params
    const pedidosRepository = new PedidosRepository()
    const productRepository = new ProductsRepository()
    const idAlreadExist = productRepository.getProducts().find((element)=> element.id === productId)
    if(!idAlreadExist){
      throw new Error("Produto não existe")
    }
    return pedidosRepository.save({
      productId,
      userId
    })
  }
}
export {CreatePedidosServices}