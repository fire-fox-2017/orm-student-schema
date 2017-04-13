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
      first_name: 'ridho',
      last_name: 'pratama',
      birth_date: '1994-09-23',
      email: 'ridho@email.com',
      tinggi_badan: 160,
      phone: 0818388710,
      createdAt : new Date(),
      updatedAt : new Date()
    // }, {
    //   first_name: 'risky',
    //   last_name: 'putri',
    //   birth_date: '1998-06-12',
    //   email: 'rizky@email.com',
    //   tinggi_badan: 155,
    //   phone: 0818388710,
    //   createdAt : new Date(),
    //   updatedAT : new Date()
    }], {})
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
