const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../utils/database');

class Location extends Model {}

Location.init({
    location_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    location_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location_phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'location'
});

module.exports = Location;