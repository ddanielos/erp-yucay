const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../utils/database');

class Product extends Model {}

Product.init({
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
}, {
    sequelize,
    modelName: 'product'
});

module.exports = Product;