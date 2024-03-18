const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const { sequelize } = require('../models/index')
class Seller extends Model {}

Seller.init({
    seller_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seller_last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller_birthday: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller_gender: {
        type: DataTypes.ENUM('male','female'),
        allowNull: false
    },
    seller_Address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller_phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seller_comments: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'seller'
});

module.exports = Seller;