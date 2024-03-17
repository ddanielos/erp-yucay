const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../utils/database');
const Sale = require('./Sale.model');
const Warehouse = require('./Warehouse.model');
const Product = require('./Product.model');

class SaleItem extends Model {}

SaleItem.init({
    sale_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
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
    modelName: 'sale_item'
});

Sale.hasMany(SaleItem, {
    foreignKey: 'sale_id',
    sourceKey: 'sale_id'
})
SaleItem.belongsTo(Sale, {
    foreignKey: 'sale_id',
    targetKey: 'sale_id'
})

Warehouse.hasMany(SaleItem, {
    foreignKey: 'warehouse_id',
    sourceKey: 'warehouse_id'
})
SaleItem.belongsTo(Warehouse, {
    foreignKey: 'warehouse_id',
    targetKey: 'warehouse_id'
})

Product.hasMany(SaleItem, {
    foreignKey: 'product_id',
    sourceKey: 'product_id'
})
SaleItem.belongsTo(Product, {
    foreignKey: 'product_id',
    targetKey: 'product_id'
})

module.exports = SaleItem;