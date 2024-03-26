import {ProductsRepository} from "../../Product/Products.Repository.js"
import {UserRepository} from "../../Users/UserRepositories.js"
import {PedidosRepository} from "../Pedidos.Repository.js"
let showPedidos = []
let user ="",product="",index = 0
class GetPedidosServices{
  execute(){
    const productsRepository = new ProductsRepository()
    const userRepository = new UserRepository()
    const pedidosRepository = new PedidosRepository()
    const Pedidos = pedidosRepository.getPedidos()
    const users = userRepository.getUser()
    const products = productsRepository.getProducts()
    if(!Pedidos){
      throw new Error("Não existem pedidos")
    }
    if(index === 1){
      showPedidos = []
      index =0
    }
    for(let i = 0; i < Pedidos.length; i++){
      for(let j = 0; j <  users.length; j++){
        if(Pedidos[i].userId === users[j].id)
        user = users[j].userName
      }
      for(let y = 0; y < products.length; y++){
       if(Pedidos[i].productId === products[y].id)
        product = products[y].name
      }
      let id = Pedidos[i].id
      showPedidos.push({
       id,
        user,
        product
      })
    }
    index++
    return showPedidos
  }
}
export {GetPedidosServices}