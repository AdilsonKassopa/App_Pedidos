import fs from "fs"
import {randomUUID} from "crypto"
let pedidos = []
fs.readFile("Pedidos.json","utf-8",(err,data)=>{
  if(err){
    console.log(err)
  }else{
    pedidos = JSON.parse(data)
  }
})
class PedidosRepository{
  save(data){
    pedidos.push({
       ...data,
       id: randomUUID()
     })
     return savePedidos()
   }
   getPedidos(){
     return pedidos
   }
   updatePedidos(data){
     pedidos = data
     savePedidos()
     return pedidos
   }
   deletePedidos(data){
     pedidos = data
     savePedidos()
     return pedidos
   }
}
function savePedidos(){
  fs.writeFile("Pedidos.json",JSON.stringify(pedidos),(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("pedido feito")
    }
  })
}
export {PedidosRepository}