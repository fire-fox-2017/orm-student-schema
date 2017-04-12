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
    return queryInterface.bulkInsert('Students', [
    {
        firstname: 'John',
        lastname: 'Doe',
        birthdate: '1990-09-16',
        email: 'johnmail.org',
        height: 190,
        phone: '089765387890',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        firstname: 'Azani',
        lastname: 'Isis',
        birthdate: '1994-09-16',
        email: 'zani@mail.com',
        height: 190,
        phone: '089765387890',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
    ], {});
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
