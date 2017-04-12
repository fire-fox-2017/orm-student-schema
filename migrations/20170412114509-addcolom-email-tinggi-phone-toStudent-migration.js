'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
        queryInterface.addColumn(
            'Students',
            'email',
            Sequelize.STRING
        )
        queryInterface.addColumn(
            'Students',
            'tinggi_badan',
            Sequelize.INTEGER
        )
        queryInterface.addColumn(
            'Students',
            'phone',
            Sequelize.STRING
        )
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
