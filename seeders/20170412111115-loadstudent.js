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
      birthdate: new Date('1991-12-24'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Eltina',
      lastname: 'Widasari',
      birthdate: new Date('1970-10-17'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Parel',
      lastname: 'Wellman',
      birthdate: new Date('1989-10-18'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Haryana',
      lastname: 'Wisnu',
      birthdate: new Date('1974-07-10'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Uci',
      lastname: 'Arahito',
      birthdate: new Date('1994-03-01'),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstname: 'Wendy',
      lastname: 'Sepmady',
      birthdate: new Date('2004-01-26'),
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
