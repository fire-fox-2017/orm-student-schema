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
            first_name: 'Ani',
            last_name: 'Silaen',
            birth_date: '1912-10-11',
            createdAt: new Date(),
            updatedAt: new Date(),
            email: 'asasa@kjskdj',
            height: '160',
            phone: '061-7873136'
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