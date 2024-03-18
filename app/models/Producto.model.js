const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../utils/database');

const PRODUCTO_TABLE = 'productos';

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
    static associate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName:PRODUCTO_TABLE,
            modelName: 'producto',
        }
    }
}


module.exports = {PRODUCTO_TABLE, ProductoSchema, Producto};