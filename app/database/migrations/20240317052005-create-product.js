'use strict';

const { TABLE_NAME, ProductoSchema } = require('../../models/Producto.model')

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TABLE_NAME, ProductoSchema )
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable(TABLE_NAME);
  }
};
