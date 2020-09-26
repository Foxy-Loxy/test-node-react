'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('Prices', {
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        price: {
          type: Sequelize.INTEGER.UNSIGNED,
        },
        createdAt: {
          field: 'created_at',
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          field: 'updated_at',
          allowNull: false,
          type: Sequelize.DATE
        },
      })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Prices');
  }
};
