'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('students',
    [{
      first_name: 'Joko',
      last_name: 'Santoso',
      birthdate: '1995-12-12',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Jajang',
      last_name: 'Raharja',
      birthdate: '1994-10-12',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Sari',
      last_name: 'Misari',
      birthdate: '1994-08-10',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
