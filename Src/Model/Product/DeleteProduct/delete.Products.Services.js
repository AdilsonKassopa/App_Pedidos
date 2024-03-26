import {ProductsRepository} from "../Products.Repository.js"
class DeleteProductsServices{
  execute(data){
    const {id} = data.params
    const productsRepository = new ProductsRepository()
    const product = productsRepository.getProducts()
    const index = product.findIndex((element)=> element.id === id)
    if(index < 0){
      throw new Error("produto não encontrado")
    }
    product.splice(index,1)
    return productsRepository.updateProduct(product)
  }
}

export {DeleteProductsServices}