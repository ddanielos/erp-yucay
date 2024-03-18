const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const { sequelize } = require('../models/index')
class PaymentMethod extends Model {}

PaymentMethod.init({
    payment_method_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    payment_method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'payment_method'
});

module.exports = PaymentMethod;