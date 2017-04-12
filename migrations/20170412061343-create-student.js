'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.CHAR
      },
      birthday: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        defaulValue : new Date()
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaulValue : new Date()
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Students');
  }
};