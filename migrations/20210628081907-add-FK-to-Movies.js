'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  return queryInterface.addColumn('Movies', 'ProductionHouseId', {
    type: Sequelize.INTEGER,
    references: {
      model: 'ProductionHouses',
      key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('Movies', 'ProductionHouseId')
  }
};
