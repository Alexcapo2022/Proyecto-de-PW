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
        allowNull : true
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
        allowNull : true
    },
    Direccion : {
        type : DataTypes.STRING(200),
        allowNull : true
    },
    Celular : {
        type : DataTypes.NUMERIC(9),
        allowNull : true
    },
    Departamento : {
        type : DataTypes.STRING(50),
        allowNull : true
    },
    Codigo_Postal : {
        type : DataTypes.STRING(10),
        allowNull : true
    }
    
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
const Detalle_Compra = sequelize.define("detalle_compra",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Cantidad : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    Precio : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    Igv : {
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
    id_producto : {
        type : DataTypes.UUID,
        allowNull : true
    },
    Nombre_Producto : {
        type : DataTypes.NUMERIC(10),
        allowNull : false
    }

}, {
    timestamps : false,
    freezeTableName : true

})
const Producto = sequelize.define("producto",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    SKU : {
        type : DataTypes.STRING(12),
        allowNull : false
    },
    Nombre : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    Precio : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    Descripcion : {
        type : DataTypes.STRING(200),
        allowNull : false
    },
    Stock : {
        type : DataTypes.NUMERIC(5),
        allowNull : true
    },
    id_categoria : {
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

// Relaciones
// Compra * <----> 1 DetalleCompra
Compra.belongsTo(Detalle_Compra, {
    foreignKey : "id_detalleCompra"
})
Detalle_Compra.hasMany(Compra, {
    foreignKey : "id"
})

// Relaciones
// Producto * <----> 1 Categoria
Categoria.belongsTo(Producto, {
    foreignKey : "categoria_id"
})
Producto.hasMany(Categoria, {
    foreignKey : "id"
})
//detalleCompra * <---> 1 producto
Detalle_Compra.belongsTo(Producto, {
    foreignKey : "id_producto"
})
Producto.hasMany(Detalle_Compra, {
    foreignKey : "id"
})


module.exports = {
    Usuario,Compra,Categoria,Producto,Detalle_Compra
}