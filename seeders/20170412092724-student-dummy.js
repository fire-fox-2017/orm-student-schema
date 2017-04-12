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
            first_name: 'John Doe',
            last_name: 'Marli',
            birthdate: '1995-01-02',
            createdAt: new Date,
            updatedAt: new Date,
            email: 'John@gmail.com',
            tinggi_badan: 160,
            phone: '08192929233'
        }, {
            first_name: 'Luffy',
            last_name: 'Edward',
            birthdate: '1990-11-22',
            createdAt: new Date,
            updatedAt: new Date,
            email: 'Luffy@gmail.com',
            tinggi_badan: 162,
            phone: '081922311533'
        }, {
            first_name: 'Nami',
            last_name: 'Gokart',
            birthdate: '1999-07-20',
            createdAt: new Date,
            updatedAt: new Date,
            email: 'Nami@gmail.com',
            tinggi_badan: 155,
            phone: '08192115223'
        }, {
            first_name: 'Zoro',
            last_name: 'Noa',
            birthdate: '1989-04-15',
            createdAt: new Date,
            updatedAt: new Date,
            email: 'Zoro@gmail.com',
            tinggi_badan: 165,
            phone: '0817563444'
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
