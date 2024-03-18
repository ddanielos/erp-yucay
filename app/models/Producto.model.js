const { DataTypes, Model, Sequelize } = require("sequelize");
//const { sequelize } = require('../utils/database');
//const { sequelize } = require('../models/index')

const TABLE_NAME = 'productos'

const ProductoSchema = {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    taxable_isc: {
        type: DataTypes.ENUM('si','no'),
        allowNull: false,
    },
    volume_liters_by_unit: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}

class Producto extends Model {
    static associate(){}

    static config(sequelize){
        return {
            sequelize,
            modelName: 'producto',
            tableName: TABLE_NAME
        }
    }
}

// Producto.init(
//     ProductoSchema,
//     Producto.config(sequelize)
// );

module.exports = {
    Producto,
    TABLE_NAME,
    ProductoSchema
};