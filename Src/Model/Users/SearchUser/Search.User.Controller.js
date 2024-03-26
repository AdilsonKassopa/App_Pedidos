import {SearchUserServices} from "./Search.User.Services.js"


class SearchUserController{
  handle(request,response){
     const {params} = request
     try{
     const serachUserServices = new SearchUserServices()
     return response.status(200).json(serachUserServices.execute(params))
     }catch(err){
       return response.status(400).json({
         message:err.message
       })
     }
  }
}

export {SearchUserController}