import {UpdateServices} from "./Update.Services.js"
class UpdateController{
  handle(request,response){
  try{
    const updateServices = new UpdateServices()
    return response.status(200).json(updateServices.execute(request))
  }catch(err){
    return response.json({
      message:err.message
    })
  }
  }
}
export {UpdateController}