const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const { sequelize } = require('../models/index')
class Customer extends Model {}

Customer.init({
    customer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    identification_number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customer_website: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credit_authorized: {
        type: DataTypes.ENUM('si','no'),
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'customer'
});

module.exports = Customer;