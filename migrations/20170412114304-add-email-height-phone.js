'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        return [queryInterface.addColumn(
            'Students',
            'height', {
                type: Sequelize.INTEGER
            }
        ), queryInterface.addColumn(
            'Students',
            'email', {
                type: Sequelize.STRING
            }
        ), queryInterface.addColumn(
            'Students',
            'phone', {
                type: Sequelize.STRING
            }
        )]
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.dropTable('users');
        */
    }
};
