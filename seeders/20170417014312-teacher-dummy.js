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


        return queryInterface.bulkInsert('Teachers', [{
                name: 'Agus',
                phone: '9578476573627',
                email: 'agus@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Bambang',
                phone: '9578476573627',
                email: 'Bambang@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Charlie',
                phone: '9578476573627',
                email: 'Charlie@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Dono',
                phone: '9578476573627',
                email: 'dono@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Edi',
                phone: '9578476573627',
                email: 'edi@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Fahmi',
                phone: '9578476573627',
                email: 'fahmi@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Gigi',
                phone: '9578476573627',
                email: 'gigi@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Hamid',
                phone: '9578476573627',
                email: 'hamid@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Ina',
                phone: '9578476573627',
                email: 'ina@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }

        ], {});
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
