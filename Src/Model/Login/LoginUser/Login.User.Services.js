import {UserRepository} from "../../Users/UserRepositories.js"
let userId =""
class LoginUserServices{
  execute(data){
    const {name,pass} = data.params
    const userRepository = new UserRepository()
    const users = userRepository.getUser()
    const findUser = users.find((element) => element.userName === name)
    if(!name){
      throw new Error("é obrigatorio introdusir o nome de usuario")
    }else if(!pass){
      throw new Error("É obrigatorio introdusir a senha")
    }
    if(!findUser){
      throw new Error("Usuario não encontrado")
    }
    if(findUser.password != pass){
      throw new Error("Palavra pass incoreta")
    }
    userId = findUser.id
    return {
      message: "login feito com sucesso"
    }
  }
}

export {LoginUserServices,userId}