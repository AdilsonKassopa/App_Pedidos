import {UserRepository} from "../UserRepositories.js"

class UserService{
  execute(data){
    const userRepository = new UserRepository()
    const findName = userRepository.findUser(data.userName)
    if(!data.userName){
      throw new Error("é obrigatorio inserir o nome")
    }
    if(!data.password){
      throw new Error("É obrigatorio inserir uma senha")
    }
    if(findName){
      throw new Error("usuario já inserido")
    }
    return userRepository.save(data)
  }
}
export {UserService}