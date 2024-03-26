import {Router} from "express"
import {CreatePedidosController} from "./CreatePedidos/Create.Pedidos.Controller.js"
import {GetPedidosController} from "./GetPedidos/get.Pedidos.Controller.js"
const routePedidos = Router()
const createPedidosController = new CreatePedidosController()
const getPedidosController = new GetPedidosController()
routePedidos.post("/:productId",createPedidosController.handle)
routePedidos.get("/",getPedidosController.handle)
export {routePedidos}

