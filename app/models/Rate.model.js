const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const { sequelize } = require('../models/index')
class Rate extends Model {}

Rate.init({
    rate_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    exchange_rate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    igv_rate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isc_tax: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enabled: {
        type: DataTypes.ENUM('activo','inactivo'),
        allowNull: false,
        defaultValue: 'inactivo'
    }
}, {
    sequelize,
    modelName: 'rate'
});

module.exports = Rate;
