import {ProductsRepository} from "../Products.Repository.js"
class GetProductsServices{
  execute(){
    const productsRepository = new ProductsRepository()
    const allreadProduct = productsRepository.getProducts()
    if(!allreadProduct){
      throw new Error("Não existem produto")
    }
    return allreadProduct
  }
}
export {GetProductsServices}