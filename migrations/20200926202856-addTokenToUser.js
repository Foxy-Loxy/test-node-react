'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addColumn('Users', 'token',{
     type: Sequelize.STRING(256)
   })
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Users', 'token');
  }
};
