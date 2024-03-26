import {DeleteUserServices} from "./Delete.User.Services.js"

class DeleteUserController{
  handle(request,response){
    const {params} = request
    try{
    const deleteUserServices = new DeleteUserServices()
    return response.status(200).json(deleteUserServices.execute(params))
    }catch(err){
      return response.status(400).json({
        message: err.message
      })
    }
    
  }
}
export {DeleteUserController}