const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const { sequelize } = require('../models/index')
class SaleType extends Model {}

SaleType.init({
    sale_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sale_type_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sale_type_description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'sale_type'
});

module.exports = SaleType;