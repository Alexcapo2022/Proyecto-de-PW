const { Sequelize, DataTypes } = require("sequelize");

// postgres://<USUARIO>:<PASSWORD>@<URL_HOST_BD>:<PUERTO_BD>/<NOMBRE_BD>

const CADENA_CONEXION = 
    "postgresql://Alex:20192659@localhost:5432/ProyectoPw"

const sequelize = new Sequelize(CADENA_CONEXION)

const Usuario = sequelize.define("usuario",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Nombre : {
        type : DataTypes.STRING(150),
        allowNull : false
    },
    Apellido : {
        type : DataTypes.STRING(150),
        allowNull : false
    },
    Correo : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    Correo : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    Contraseña : {
        type : DataTypes.STRING(150),
        allowNull : false
    },
    Pais : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    Direccion : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    Celular : {
        type : DataTypes.NUMERIC(9),
        allowNull : false
    },
    id_compra : {
        type : DataTypes.UUID,
        allowNull : true
    },
    
}, {
    timestamps : false,
    freezeTableName : true
})
const Compra = sequelize.define("compra",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    fecha_compra : {
        type : DataTypes.DATE,
        allowNull : true
    }, 
    Subtotal : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    Descuento : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    Total : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    Igv : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    id_detalleCompra : {
        type : DataTypes.UUID,
        allowNull : true
    }
}, {
    timestamps : false,
    freezeTableName : true

})
const Categoria = sequelize.define("categoria",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Nombre : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
}, {
    timestamps : false,
    freezeTableName : true
})

// Relaciones
// Compra * <----> 1 Usuario
Compra.belongsTo(Usuario, {
    foreignKey : "compra_id"
})
Usuario.hasMany(Compra, {
    foreignKey : "id"
})


module.exports = {
    Usuario,Compra,Categoria
}