'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Students',
        'emails', {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Students',
        'tinggi', {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Students',
        'phone', {
          type: Sequelize.STRING
        }
      ),
    ]
  },

  down: function(queryInterface, Sequelize) {}
};
