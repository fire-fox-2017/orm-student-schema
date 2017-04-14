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
      firstname: 'John',
      lastname: 'Doe',
      birthdate: '03-08-1973',
      createdAt: new Date(),
      updatedAt: new Date(),
      emails: '123@gmail.com',
      tinggi: 190,
      phone: '082383742938'
    },
    {
      firstname: 'Ilham',
      lastname: 'H',
      birthdate: '03-08-1983',
      createdAt: new Date(),
      updatedAt: new Date(),
      emails: 'abc@gmail.com',
      tinggi: 170,
      phone: '08948347234'
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
