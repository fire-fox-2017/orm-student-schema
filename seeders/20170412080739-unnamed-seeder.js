'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
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
            first_name: 'Ivan',
            last_name:'Habibi',
            height:170,
            email:'ivanhabi2@gmail.com',
            phone:'081321450548',
            birth_date: new Date('1989-06-23T10:20:30Z'),
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            first_name: 'Rama',
            last_name:'Muhammad',
            height:168,
            email:'muhrama@gmail.com',
            phone:'081321450448',
            birth_date: new Date('1979-07-13T10:20:30Z'),
            createdAt: new Date(),
            updatedAt: new Date()

        }, {
            first_name: 'Indra',
            last_name:'Manggala',
            height:169,
            email:'indramanggala@gmail.com',
            phone:'081322450448',
            birth_date: new Date('1999-08-03T10:20:30Z'),
            createdAt: new Date(),
            updatedAt: new Date()

        }], {});
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    }
};
