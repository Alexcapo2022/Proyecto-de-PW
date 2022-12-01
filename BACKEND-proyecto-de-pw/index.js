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
    let type = req.query.Categoria
    let items = req.query.Id
    if (type == "array"){
        let id_prod = req.query.Id.split(',')
        items = []
        items = id_prod.listapc_ArmadoProducto(item =>{
            return Sequelize.Producto(item)
        })
    return resp.status(200).send(document)}
})

// Mostrar PcArmado
app.get("/pc_armado",async (req,resp) => {
    const listaPc_armado = await PC_Armado.findAll()

    resp.send(listaPc_armado)
})

//MOstrar PC_armado_filtrado
app.get("/PC_armado",async(req,resp)=>{
    const tipodeArmado = req.query.tipo
    if(tipodeArmado=="coding" || tipodeArmado==undefined){
        const listadoPcArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "177cc526-e047-4e45-83c8-9e026c7e3f92",
            },
            include: Producto
       })
       resp.send(listadoPcArmado)
    }
    if(tipodeArmado=="gaming"){
        const listadoPcArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "306e760f-0359-4e3c-b373-f8ec45ee171d",
            },
            include: Producto
       })
       resp.send(listadoPcArmado)
    }
    if(tipodeArmado=="office"){
        const listadoPcArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "7a88587c-5a08-4645-9bc2-5a8f9688b0db",
            },
            include: Producto
       })
       resp.send(listadoPcArmado)
    }
    if(tipodeArmado=="other"){
        const listadoPcArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "5f1a374a-355b-4d4f-b28a-1254715bdfc6",
            },
            include: Producto
       })
       resp.send(listadoPcArmado)
    }
    if(tipodeArmado=="design"){
        const listadoPcArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "c9199244-6b21-4160-86f7-cae5d20cb0bc",
            },
            include: Producto
       })
       resp.send(listadoPcArmado)
    }
    if(tipodeArmado=="rendering"){
        const listadoPcArmado = await PC_Armado_Producto.findAll({
            where:{
                PC_Armado_id: "354f6c54-6321-4fb7-8ffc-3fe6adf62fd5",
            },
            include: Producto
       })
       resp.send(listadoPcArmado)
    }
   

})
/*
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
*/
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
app.post("/registro", async (req, res) => {
    const email = req.body.email
    const usuarioExistente = await Usuario.findAll({
        where : {
            Correo: email
        }
    })
    console.log(usuarioExistente.length)
    if (usuarioExistente.length == 0){
        try {
            await Usuario.create({
            
                Nombre: req.body.name,
                Apellido: req.body.lastName,
                Correo: email,
                Contraseña: req.body.password,
                Pais: req.body.pais,
                Direccion: req.body.address,
                Departamento: req.body.apartment,
                Codigo_Postal: req.body.zip,
                
            });
            res.send({
                verify: true
            })
            return      
        } catch (error) {
            res.send({
                error : `ERROR. ${error}`
            })
            return
        }  
    }else{res.send({
        verify: false
    })}
    console.log(res.json().verify)
     
})
//Realizar Login
app.post("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const usuarioRegistrado = await Usuario.findAll({
        where : {
            Correo: email,
            Contraseña: password
        }
    })
    if (usuarioRegistrado.length == 0){
        // No existe usuario
        res.send({
            verify: false
        })
    } else{
        res.send({
            verify: true
        })
    }
    
})
/*
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

})*/
//devolver correo
app.get("/vercorreo", async(req, resp)=>{
    const correo = req.query.correo;
    const listadoCuentas = await Usuario.findAll({
        where : {
            Correo: correo
        }
    })
    resp.send(listadoCuentas)
})
//PARA EDITAR USUARIO
app.put("/registro/:correo",async(req,resp)=>{
    /*const dataRequest = req.body
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

    const correoExistente = await Usuario.findAll({
        where : {
            Correo : correo
        }
    })
    console.log(correoExistente.length)
    if (correoExistente.length == 0){
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
    
            },{where: {Correo : correo}})
    
            
        } catch (error) {
            resp.send({
                error : `ERROR. ${error}`
            })
            return
        }
        resp.send({
            error : ""
        })}
    console.log(resp.json().verify)
})*/   
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

    },{where: {Correo : correo}})

    
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


//Para realizar el LOGIN
//Login
app.post("/login", async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const UsuarioRegistrado = await Usuario.findAll({
        where : {
            Correo: email,
            Contraseña: password
        }
    })
    if (UsuarioRegistrado.length == 0){
        //En caso no existe usuario
        res.send({
            verify: false
        })
    } else{
        res.send({
            verify: true
        })
    }
    
})

//PARA ELIMINAR USUARIO
app.delete("/registro/:id",async(req,resp)=>{
    const Id= req.params.id
    await Usuario.destroy({where:{id:Id}})
})

//POST PARA CREAR REPORTE
//POST PARA CREAR REPORTE
app.post("/reporte",async(req,resp)=>{
    const dataRequest = req.body
    //const usuario_id = dataRequest.userId
    const correo = dataRequest.correo
    const Nombre = dataRequest.nombre
    const Telefono = dataRequest.telefono
    const Asunto = dataRequest.asunto
    const Descripcion = dataRequest.descripcion
    //falta vincular con el id del usuario (fk)

    try {
        await Reporte.create({
            Correo :correo,
            Nombre : Nombre,
            Telefono : Telefono,
            Asunto : Asunto,
            Descripcion : Descripcion,
            id_usuario : "2babb094-7f68-45d1-86b3-ad685a6a1b69",
            
        },{where: {Correo : correo}})
        
    } catch (error) {
        resp.send({
            error : `ERROR. ${error}`
        })
        return
    }
    resp.send({
        error : "Report enviado correctamente"
    })
})
//POST PARA CREAR RESEÑA
app.post("/resena",async(req,resp)=>{
    const dataRequest = req.body
    const Puntaje = dataRequest.puntaje
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
            id_usuario : "2babb094-7f68-45d1-86b3-ad685a6a1b69",
            
            
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
// Muestra los reportes
app.get("/reporte",async(req,resp)=>{
    const Correo = req.query.correo
    if(Correo!=undefined){
        const ListadoReporte = await Reporte.findAll({
            where:{
                Correo:Correo
            }
        })
        resp.send(ListadoReporte)
    }else{
        const ListadoReporte = await Reporte.findAll({

        })
        resp.send(ListadoReporte)
    }
})
//Muestra las reseñas filtradas por Persona
app.get("/listadoUsuario",async(req,resp)=>{
    const Usuarioid=req.query.usuario
    if(Usuarioid!=undefined){
        
        const listadoUsuario= await Usuario.findAll({
            where:{
                id:Usuarioid
            }
        })
        resp.send(listadoUsuario)
    }else{
        const listadoResena= await Resena.findAll({
            include: {
                model:Usuario,
                where : {
                    Nombre:"Roberto",
                }
            }
        })
        resp.send(listadoResena)
    }
})

app.get("/resena",async(req,resp)=>{
    const Usuarioid=req.query.usuario
    if(Usuarioid!=undefined){
        const listadoResena= await Resena.findAll({
            where:{
                id_usuario:Usuarioid
            }
        })  
        const listadoUsuario= await Usuario.findAll({
            where:{
                id:Usuarioid
            }
        })
        
        listadoResena[0]["Nombre"]=listadoUsuario["Nombre"]
        
        resp.send(listadoResena)
    }else{
        const listadoResena= await Resena.findAll({
            include: {
                model:Usuario,
                where : {
                    Nombre:"Roberto",
                }
            }
        })
        resp.send(listadoResena)
    }
})

app.get("/Periferico",async(req,resp)=>{
    const nombre = req.query.nombre
    if(nombre==undefined ){
        const listadoProducto = await Producto.findAll()
        resp.send(listadoProducto)
    }else{
        const listadoProducto = await Producto.findAll({
            where:{
                Nombre: nombre
            }
        })
        resp.send(listadoProducto)
    }
    
})

app.post("/orden",async(req,resp)=>{

    await Producto.sync()
    await Orden.sync()
    await Orden_Producto.sync()

    const Delete= req.query.delete
    
    if(Delete=="true"){
        await Orden.destroy({
            where:{},
            truncate:true
        })
        await Orden_Producto.destroy({
            where:{},
            truncate:true
        })
    }
    if(Delete==undefined){
    const Productos = req.body.possibleCheckoutItems.list
    const userid=req.body.userid

    console.log("i got a request to post")

    const OrdenId= crypto.randomUUID()
     
    await Orden.create({
        Orden_id: `${OrdenId}`,
        Usuario_id: `${userid}`,
        Monto:"1",
        Direccion:"12",
        Fecha:new Date().toJSON()
    })

    

    for(let i=0;i<Productos.length;i++){
        const temp = await Producto.findOne({
            where:{
                Nombre: Productos[i].name
            }
        })
        await Orden_Producto.create({
            Orden_Producto_id:`${crypto.randomUUID()}`,
            Producto_id:temp.Producto_id,
            Orden_id: `${OrdenId}`
        })
    }
    }
    
    

      resp.end()

})


app.get("/Orden",async(req,resp)=>{
    const userid=req.query.userid

    if(userid==undefined || userid==null){
        
        const listadoOrden=await Orden_Producto.findAll({
            include:Producto
        })
        resp.send(listadoOrden)
    }else{
        const listadoOrdenOg=await Orden.findAll({
            where:{
                Usuario_id:userid
            },
            include:{
                model:Orden_Producto,
                include:Producto
            }
        })
        resp.send(listadoOrdenOg)
    }
    

    
})


app.listen(PUERTO, () => { 
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})


