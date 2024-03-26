import {Router} from "express"
import {UserController} from "./Create/userController.js"
import {GetUserController} from "./GetUsers/Get.user.Controller.js"
import {SearchUserController} from "./SearchUser/Search.User.Controller.js"
import {UpdateUserController} from "./UpdateUser/Update.User.Controller.js"
import {DeleteUserController} from "./DeleteUser/Delete.User.Repository.js"
import {LoginUserController} from "../Login/LoginUser/Login.User.Controller.js"
const userRouter = Router()
const getUserController = new GetUserController()
const userController = new UserController()
const searchUserController = new SearchUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()
const loginUserController = new LoginUserController()
userRouter.post("/:userName/:password",userController.handle)
userRouter.get("/",getUserController.handle)
userRouter.post("/:userName",searchUserController.handle)
userRouter.put("/:userName/:password/:id",updateUserController.handle)
userRouter.delete("/:id",deleteUserController.handle)
userRouter.post("/login/:name/:pass",loginUserController.handle)

export {userRouter}