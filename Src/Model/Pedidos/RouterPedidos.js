import {Router} from "express"
import {CreatePedidosController} from "./CreatePedidos/Create.Pedidos.Controller.js"
import {GetPedidosController} from "./GetPedidos/get.Pedidos.Controller.js"
import {UpdateController} from "./UpdatePedidos/Update.Controller.js"
const routePedidos = Router()
const createPedidosController = new CreatePedidosController()
const getPedidosController = new GetPedidosController()
const updateController = new UpdateController()
routePedidos.post("/:productId",createPedidosController.handle)
routePedidos.get("/",getPedidosController.handle)
routePedidos.put("/:Idproduct/:productId",updateController.handle)
export {routePedidos}

