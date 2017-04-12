'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn('students','email',
      {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('students','height',
      {
        type: Sequelize.INTEGER
      }),
      queryInterface.addColumn('students','phone',
      {
        type: Sequelize.STRING
      })
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    return [
      queryInterface.removeColumn('students', 'email'),
      queryInterface.removeColumn('students', 'height'),
      queryInterface.removeColumn('students', 'phone')

    ];


  }
};
