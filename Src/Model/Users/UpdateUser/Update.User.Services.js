import {UserRepository} from "../UserRepositories.js"

class UpdateUserServices{
  execute(data){
    const {userName,id,password} = data
    const userRepository = new UserRepository()
    const users = userRepository.getUser()
    const index = users.findIndex((element)=> element.id === id)
    users[index] ={
      ...users[index],
      userName,
      password
    }
    return userRepository.update(users)
  }
}

export {UpdateUserServices}