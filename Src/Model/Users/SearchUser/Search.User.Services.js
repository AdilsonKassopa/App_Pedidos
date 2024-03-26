import {UserRepository} from "../UserRepositories.js"

class SearchUserServices{
  execute(data){
    const {userName} = data
    const userRepository = new UserRepository()
    const findUserName = userRepository.findUser(userName)
    if(!userName){
      throw new Error("Obrigatorio preencher o campo")
    }
    if(!findUserName){
      throw new Error("Usuario não encontrado")
    }
    return findUserName
  }
}

export {SearchUserServices}