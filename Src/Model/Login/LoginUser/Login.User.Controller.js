import {LoginUserServices} from "./Login.User.Services.js"
class LoginUserController{
  handle(request,response){
    try{
    const loginUserServices = new LoginUserServices()
    return response.status(200).json(loginUserServices.execute(request))
    }catch(err){
      return response.status(400).json({
        message:err.message
      })
    }
  }
}
export {LoginUserController}