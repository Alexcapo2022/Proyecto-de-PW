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

//app.post("/formulario"),async (req,resp) =>{}
    
//POST PARA REGISTRO USUARIO
app.post("/registro",async(req,resp) => {
    const dataRequest = req.body
    console.log(dataRequest.nombre)
    const nombreID = dataRequest.nombre
    const apellidoID = dataRequest.apellido
    const correo = dataRequest.correo
    const contraseña = dataRequest.contra


    try {
        await Usuario.create({
            Nombre : nombreID,
            Apellido : apellidoID,
            Correo :correo,
            Contraseña : contraseña
        })
        
    } catch (error) {
        resp.send({
            error : `ERROR. ${error}`
        })
        return
    }
    resp.send({
        error : ""
    })

})
//PARA EDITAR USUARIO
app.put("/registro/:id",async(req,resp)=>{
    
    const dataRequest = req.body
    console.log(req.params)
    console.log(req.body)
    const Id= req.params.id
    const nombreID = dataRequest.nombre
    const apellidoID = dataRequest.apellido
    const correo = dataRequest.correo
    const Contraseña = dataRequest.contra
    const Pais = dataRequest.pais
    const Direccion = dataRequest.direc
    const Celular = dataRequest.celular
    const Departamento = dataRequest.departamento
    const Codigo_Postal = dataRequest.cp

    try {
        await Usuario.update({
            Nombre : nombreID,
            Apellido : apellidoID,
            Correo : correo,
            Contraseña : Contraseña,
            Pais : Pais,
            Direccion : Direccion,
            Celular : Celular,
            Departamento : Departamento,
            Codigo_Postal : Codigo_Postal,

        },{where: {id : Id}})

        
    } catch (error) {
        resp.send({
            error : `ERROR. ${error}`
        })
        return
    }
    resp.send({
        error : ""
    })

})
//PARA ELIMINAR USUARIO
app.delete("/registro/:id",async(req,resp)=>{
    const Id= req.params.id
    await Usuario.destroy({where:{id:Id}})
})

//POST PARA CREAR REPORTE
app.post("/reporte",async(req,resp)=>{
    const dataRequest = req.body
    
    const correo = dataRequest.correo
    console.log(dataRequest.nombre)
    const nombreID = dataRequest.nombre
    const Telefono = dataRequest.telefono
    const Asunto = dataRequest.asunto
    const Descripcion = dataRequest.descripcion
    //falta vincular con el id del usuario (fk)

    try {
        await Reporte.create({
            Correo :correo,
            Nombre : nombreID,
            Telefono : Telefono,
            Asunto : Asunto,
            Descripcion : Descripcion,
            
        })
        
    } catch (error) {
        resp.send({
            error : `ERROR. ${error}`
        })
        return
    }
    resp.send({
        error : ""
    })
})
//POST PARA CREAR RESEÑA
app.post("/resena",async(req,resp)=>{
    const dataRequest = req.body
    const Puntaje = dataRequest.puntaje
    console.log(dataRequest.comentario)
    const Comentario = dataRequest.comentario
    const Video = dataRequest.video
    const Link = dataRequest.link
    //falta vincular con el id del usuario (fk)

    try {
        await Resena.create({
            Puntaje :Puntaje,
            Comentario : Comentario,
            Video : Video,
            Link : Link,
            
            
        })
        
    } catch (error) {
        resp.send({
            error : `ERROR. ${error}`
        })
        return
    }
    resp.send({
        error : ""
    })
})

app.listen(PUERTO, () => { 
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})


