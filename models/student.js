'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`;
      },
      getAge: function() {
        let now = new Date(Date.now());
        console.log(`birthdate: ${this.birthdate}`);
        let age = now.getYear() - this.birthdate.getYear();
        
        return age;
      }

    }// end of instanceMethods
  });
  return Student;
};