import express from "express"
import {productRouter} from "./Model/Product/ProductRouter.js"
import {routePedidos} from "./Model/Pedidos/RouterPedidos.js"
import {userRouter} from "./Model/Users/UserRouter.js"
const app = express()
app.use(express.json())
app.use("/products",productRouter)
app.use("/users",userRouter)
app.use("/pedidos",routePedidos)

app.listen(3003,()=> console.log("O servidor esta rodando na porta 3003"))