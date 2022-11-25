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
const Reporte = sequelize.define("reporte",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Correo : {
        type : DataTypes.STRING(200),
        allowNull : true
    },
    Nombre : {
        type : DataTypes.STRING(150),
        allowNull : true
    },
    Telefono : {
        type : DataTypes.NUMERIC(9),
        allowNull : true
    },
    Asunto : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    Descripcion : {
        type : DataTypes.STRING(300),
        allowNull : false
    },
    id_usuario : {
        type : DataTypes.UUID,
        allowNull : true
    }
}, {
    timestamps : false,
    freezeTableName : true

})
const Resena = sequelize.define("resena",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Puntaje : {
        type : DataTypes.STRING(100),
        allowNull : true
    },
    Comentario : {
        type : DataTypes.STRING(300),
        allowNull : true
    },
    Video : {
        type : DataTypes.STRING(200),
        allowNull : true
    },
    Link : {
        type : DataTypes.STRING(300),
        allowNull : false
    },
    id_usuario : {
        type : DataTypes.UUID,
        allowNull : true
    }
}, {
    timestamps : false,
    freezeTableName : true

})

const Orden = sequelize.define("orden",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    fecha_compra : {
        type : DataTypes.DATE,
        allowNull : true
    }, 
    Monto : {
        type : DataTypes.NUMERIC(10),
        allowNull : true
    },
    id_usuario : {
        type : DataTypes.UUID,
        allowNull : true
    },
    direccion : {
        type : DataTypes.STRING(150),
        allowNull : true
    }
}, {
    timestamps : false,
    freezeTableName : true

})
const Orden_Producto = sequelize.define("orden_producto",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    id_orden : {
        type : DataTypes.UUID,
        allowNull : true
    },
    id_producto : {
        type : DataTypes.UUID,
        allowNull : true
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
        allowNull : true
    },
}, {
    timestamps : false,
    freezeTableName : true
})
const PC_Armado_Producto = sequelize.define("pc_armado_producto",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    id_pcArmado : {
        type : DataTypes.UUID,
        allowNull : true
    },
    id_producto : {
        type : DataTypes.UUID,
        allowNull : true
    }
}, {
    timestamps : false,
    freezeTableName : true
})
const PC_Armado = sequelize.define("pc_armado",{
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    Nombre : {
        type : DataTypes.STRING(100),
        allowNull : true
    },
    Descripcion : {
        type : DataTypes.STRING(300),
        allowNull : false
    },
}, {
    timestamps : false,
    freezeTableName : true
})

// Relaciones
// Orden * <----> 1 Usuario
Orden.belongsTo(Usuario, {
    foreignKey : "id_usuario"
})
Usuario.hasMany(Orden, {
    foreignKey : "id"
})

// Relaciones
// Orden * <----> 1 ordenproducto
Orden_Producto.belongsTo(Orden, {
    foreignKey : "id_orden"
})
Orden.hasMany(Orden_Producto, {
    foreignKey : "id"
})
// Relaciones
// Orden * <----> 1 Producto
Orden_Producto.belongsTo(Producto, {
    foreignKey : "id_producto"
})
Producto.hasMany(Orden_Producto, {
    foreignKey : "id"
})

// Relaciones
// Producto * <----> 1 Categoria
Producto.belongsTo(Categoria, {
    foreignKey : "id_categoria"
})
Categoria.hasMany(Producto, {
    foreignKey : "id"
})

// Relaciones
// PcArmado_producto * <----> 1 pcArmado
PC_Armado_Producto.belongsTo(PC_Armado, {
    foreignKey : "id_pcArmado"
})
PC_Armado.hasMany(PC_Armado_Producto, {
    foreignKey : "id"
})
// Relaciones
// PcArmado_producto * <----> 1 producto
PC_Armado_Producto.belongsTo(Producto, {
    foreignKey : "id_producto"
})
Producto.hasMany(PC_Armado_Producto, {
    foreignKey : "id"
})

//Reporte * <---> 1 Usuario
Reporte.belongsTo(Usuario, {
    foreignKey : "id_usuario"
})
Usuario.hasMany(Reporte, {
    foreignKey : "id"
})
//Resena * <---> 1 Usuario
Resena.belongsTo(Usuario, {
    foreignKey : "id_usuario"
})
Usuario.hasMany(Resena, {
    foreignKey : "id"
})


module.exports = {
    Usuario,Orden,Categoria,Producto,Orden_Producto,Reporte,Resena,PC_Armado_Producto,PC_Armado
}