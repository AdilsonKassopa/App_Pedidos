import {GetUsersServices} from "./Get.users.Services.js"

class GetUserController{
  handle(request,response){
    try{
      const getUsersServices = new GetUsersServices()
      return response.json(getUsersServices.execute())
    }catch(err){
      return response.statu(400).json({
        message: err.message
      })
    }
  }
}
export {GetUserController}