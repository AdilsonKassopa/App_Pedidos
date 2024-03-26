import {ProductsRepository} from "../Products.Repository.js"

class CreateProductsServices{
  execute(data){
    const productsRepository = new ProductsRepository()
    const findProduct = productsRepository.getProducts().find((element)=> element.name === data.name)
    if(!data.name){
      throw new Error("É obrigatorio inserir o nome")
    }
    if(findProduct){
      throw new Error("o Produto ja existe")
    }
    return productsRepository.save(data)
  }
}
export {CreateProductsServices}