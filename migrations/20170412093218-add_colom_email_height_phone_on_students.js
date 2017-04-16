'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return[
      queryInterface.addColumn('Students', 'email', Sequelize.TEXT),
      queryInterface.addColumn('Students', 'height', Sequelize.INTEGER),
      queryInterface.addColumn('Students', 'phone', Sequelize.INTEGER),
    ]
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return[
      queryInterface.removeColumn('Students', 'email', Sequelize.TEXT),
      queryInterface.removeColumn('Students', 'height', Sequelize.INTEGER),
      queryInterface.removeColumn('Students', 'phone', Sequelize.INTEGER),
    ]
  }
};
