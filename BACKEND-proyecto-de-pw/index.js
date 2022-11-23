const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const { Usuario,Orden,Categoria,Producto,Orden_Producto,Reporte,Resena,PC_Armado_Producto,PC_Armado } = require("./dao")

const PUERTO = 4444

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true 
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico

//1 primer get
app.get("/usuarios",async (req,resp) => {
    const listaUsuarios = await Usuario.findAll()

    resp.send(listaUsuarios)
})
//2 Mostrar Categorias
//
app.get("/categorias",async (req,resp) => {
    const listaCategorias = await Categoria.findAll()

    resp.send(listaCategorias)
})

// Mostrar Productos
app.get("/productos",async (req,resp) => {
    const listaProductos = await Producto.findAll()

    resp.send(listaProductos)
})

// Mostrar PcArmado
app.get("/pc_armado",async (req,resp) => {
    const listaPc_armado = await PC_Armado.findAll()

    resp.send(listaPc_armado)
})
// Mostrar Reporte
app.get("/reporte",async (req,resp) => {
    const listaReporte = await Reporte.findAll()

    resp.send(listaReporte)
})
// Mostrar Reseña
app.get("/resena",async (req,resp) => {
    const listaResena = await Resena.findAll()

    resp.send(listaResena)
})
// Mostrar Orden
app.get("/orden",async (req,resp) => {
    const listaOrden = await Orden.findAll()

    resp.send(listaOrden)
})

// Mostrar Orden_producto
app.get("/orden_producto",async (req,resp) => {
    const listaOrden_producto = await Orden_Producto.findAll()

    resp.send(listaOrden_producto)
})

// Mostrar Pc_Armado_Producto
app.get("/pc_ArmadoProducto",async (req,resp) => {
    const listapc_ArmadoProducto = await PC_Armado_Producto.findAll()

    resp.send(listapc_ArmadoProducto)
})

app.listen(PUERTO, () => { 
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})
