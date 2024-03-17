const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../utils/database');

const ProductSchema = {
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

class Product extends Model {

    static config(sequelize){
        return {
            sequelize,
            modelName: 'product'
        }
    }
}

Product.init(
    ProductSchema,
    Product.config(sequelize)
);

module.exports = Product;