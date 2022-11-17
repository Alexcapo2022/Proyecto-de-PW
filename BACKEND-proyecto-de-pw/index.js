const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const { Usuario,Compra,Categoria } = require("./dao")

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
//1 primer get
app.get("/categorias",async (req,resp) => {
    const listaCategorias = await Categoria.findAll()

    resp.send(listaCategorias)
})

app.listen(PUERTO, () => { 
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})
