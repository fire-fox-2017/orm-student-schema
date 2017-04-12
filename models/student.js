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
      },
      getAllData: function(callback) {
        this.findAll()
          .then(students => {
            students.forEach( student => {
              // console.log(`--- ${student.id} ${student.first_name} ${student.last_name} ${student.birthdate} ${student.full_name}`);

              student.setDataValue("full_name", student.first_name + " " + student.last_name);
              
              // console.log(`******* ${student.id} ${student.first_name} ${student.last_name} ${student.birthdate} ${student.getDataValue('full_name')}`);
              // console.log(`here   ${student.getDataValue('full_name')}`);

              // console.log(student.toJSON());
            })

            callback(students);
          })
          .catch(err => {
            console.log(err.message);
          })
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