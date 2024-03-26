import {ProductsRepository} from "../Products.Repository.js"
class UpdateProductsServices{
  execute(data){
    const {name,price,id} = data.params
    const productsRepository = new ProductsRepository()
    const product = productsRepository.getProducts()
    const index = product.findIndex((element)=> element.id === id)
    if(index < 0){
      throw new Error("Produto não encontrado")
    }
    product[index] ={
      ...product[index],
      name,
      price
    }
    return productsRepository.updateProduct(product)
  }
}
export {UpdateProductsServices}