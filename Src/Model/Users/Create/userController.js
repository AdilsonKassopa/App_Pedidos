import {UserService} from "./userService.js"

class UserController{
  handle(request,response){
    const {params} = request
    try{
    const userService = new UserService()
    const result = userService.execute(params)
    return response.json(result)
    }catch(err){
      return response.status(400).json({
        message:err.message
      })
    }
  }
}
export {UserController}