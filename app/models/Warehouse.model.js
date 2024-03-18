const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const { sequelize } = require('../models/index')
class Warehouse extends Model {}

Warehouse.init({
    warehouse_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    warehouse_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    warehouse_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    warehouse_phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    warehouse_city: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'warehouse'
});

module.exports = Warehouse;