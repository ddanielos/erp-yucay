const { DataTypes, Model } = require("sequelize");
//const { DataTypes } = require("sequelize"); //eliminar


const { sequelize } = require('../utils/database');

class DocumentType extends Model {}

DocumentType.init({
    document_type_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    document_type_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'document_type'
});

module.exports = DocumentType;