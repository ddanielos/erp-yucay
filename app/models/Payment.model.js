const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const Sale = require('./Sale.model');
const { sequelize } = require('../models/index')
class Payment extends Model {}

Payment.init({
    payment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    installments: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount_due: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'payment'
});

Sale.hasOne(Payment, {
    foreignKey: 'sale_id'
})
Payment.belongsTo(Sale, {
    foreignKey: 'sale_id'
})

module.exports = Payment;