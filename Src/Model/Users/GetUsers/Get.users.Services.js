import {UserRepository} from "../UserRepositories.js"

class GetUsersServices{
  execute(){
   const userRepository = new UserRepository() 
   if(!userRepository.getUser()){
     throw new Error("Não existem usuarios")
   }
   return userRepository.getUser()
  }
}

export {GetUsersServices}