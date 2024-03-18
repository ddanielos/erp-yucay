const { DataTypes, Model } = require("sequelize");
//const { sequelize } = require('../utils/database');
const Customer = require("./Customer.model");
const Seller = require("./Seller.model");
const Location = require("./Location.model");
const SaleType = require("./SaleType.model");
const DocumentType = require("./DocumentType.model");
const { sequelize } = require('../models/index')
class Sale extends Model {}

Sale.init({
    sale_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sale_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    paymen_due_date: {
        type: DataTypes.DATE,
    },
    payment_term: {
        type: DataTypes.ENUM('contado','credito'),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('activo','anulado'),
        allowNull: false,
    },
    currency: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    exchange_rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total_value: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discount_rate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    discount_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isc_tax: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    igv_rate: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    igv_amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    total_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'sale'
});

Customer.hasMany(Sale, {
    foreignKey: 'customer_id',
    sourceKey: 'customer_id'
})
Sale.belongsTo(Customer, {
    foreignKey: 'customer_id',
    targetKey: 'customer_id'
})

Seller.hasMany(Sale, {
    foreignKey: 'seller_id',
    sourceKey: 'seller_id'
})
Sale.belongsTo(Seller, {
    foreignKey: 'seller_id',
    targetKey: 'seller_id'
})

Location.hasMany(Sale, {
    foreignKey: 'location_id',
    sourceKey: 'location_id'
})
Sale.belongsTo(Location, {
    foreignKey: 'location_id',
    targetKey: 'location_id'
})

SaleType.hasMany(Sale, {
    foreignKey: 'sale_type_id',
    sourceKey: 'sale_type_id'
})
Sale.belongsTo(SaleType, {
    foreignKey: 'sale_type_id',
    targetKey: 'sale_type_id'
})

DocumentType.hasMany(Sale, {
    foreignKey: 'document_type_id',
    sourceKey: 'document_type_id'
})
Sale.belongsTo(DocumentType, {
    foreignKey: 'document_type_id',
    targetKey: 'document_type_id'
})

module.exports = Sale;