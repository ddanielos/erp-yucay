'use strict';

const { ProductoSchema, PRODUCTO_TABLE } = require('../../models/Producto.model');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCTO_TABLE, ProductoSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCTO_TABLE);
  }
};
