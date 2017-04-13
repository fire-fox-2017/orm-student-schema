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
      first_name: 'John',
      last_name: 'Doe',
      birthdate: new Date('1989-03-25'),
      // birthdate: new Date('1989-03-25').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Wick',
      birthdate: new Date('1970-05-12'),
      // birthdate: new Date('1970-05-12').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Bro',
      birthdate: new Date('1965-11-21'),
      // birthdate: new Date('1965-11-21').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
