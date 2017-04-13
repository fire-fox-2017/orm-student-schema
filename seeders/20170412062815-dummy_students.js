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
    return queryInterface.bulkInsert('Students', [{
      firstname: 'Oscar',
      lastname: 'Hermawan',
      birthdate: new Date(1990,10,26),
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    firstname: 'Zani',
    lastname: 'Akbar',
    birthdate: new Date(1994,11,11),
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
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
