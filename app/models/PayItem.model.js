const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const Payment = require('./Payment.model');
const PaymentMethod = require('./PaymentMethod.model');
const { sequelize } = require('../models/index')
class PayItem extends Model {}

PayItem.init({
    pay_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pay_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    op_number: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'pay_item'
});

Payment.hasMany(PayItem, {
    foreignKey: 'payment_id',
    sourceKey: 'payment_id'
})
PayItem.belongsTo(Payment, {
    foreignKey: 'payment_id',
    targetKey: 'payment_id'
})

PaymentMethod.hasMany(PayItem, {
    foreignKey: 'payment_method_id',
    sourceKey: 'payment_method_id'
})
PayItem.belongsTo(PaymentMethod, {
    foreignKey: 'payment_method_id',
    targetKey: 'payment_method_id'
})

module.exports = PayItem;