import fs from "fs"
import {randomUUID} from "crypto"
let products = []
fs.readFile("Products.json","utf-8",(err,data)=>{
  if(err){
    console.log(err)
  }else{
    products = JSON.parse(data)
  }
})
class ProductsRepository{
  save(data){
    products.push({
      ...data,
      id:randomUUID()
    })
    saveProducts()
    return products
  }
  getProducts(){
    return products
  }
  updateProduct(data){
    products = data
    saveProducts()
    return products
  }
}
function saveProducts(){
  fs.writeFile("Products.json",JSON.stringify(products),(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("produto inserido")
    }
  })
}
export {ProductsRepository}