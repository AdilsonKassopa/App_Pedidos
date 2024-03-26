import {UserRepository} from "../UserRepositories.js"

class DeleteUserServices{
   execute(data){
     const {id} = data
     const userRepository = new UserRepository()
     const users = userRepository.getUser()
     const index = users.findIndex((element)=> element.id === id)
     users.splice(index,1)
     return userRepository.update(users)
     
   }
}
export {DeleteUserServices}