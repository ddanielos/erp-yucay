const {Producto, ProductoSchema} = require('./Producto.model');

function setupModels(sequelize){
    Producto.init(
        ProductoSchema,
        Producto.config(sequelize)
    )
}

module.exports = setupModels;