import {UpdateUserServices} from "./Update.User.Services.js"

class UpdateUserController{
  handle(request,response){
    const {params} = request
    try{
    const updateUserService = new UpdateUserServices()
    return response.status(200).json(updateUserService.execute(params))
    }catch(err){
      return response.status(400).json({
        message:err.message
      })
    }
  }
}
export {UpdateUserController}