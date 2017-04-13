'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    height: {
      type: DataTypes.INTEGER,
      isNumeric: true,
      min: 150
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length must be 10 - 13'
        },
        isNumeric: {
          args: true,
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Phone not allow alphanumeric'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(val, next) {
          if(val) {
            Student
            .find({
              where: {
                email: val
              }
            })
            .then((err) => {
              if (err) {
                return next('err');
              } else {
                next();
              }
            })
          }
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min:150
      }
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll().then(function(students) {
          callback(students);
        });   
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.first_name} ${this.last_name}`;
      },
      getAge: function() {
        let now = new Date();
        return (now.getFullYear() - this.birthdate.getFullYear());
      }
    }
  });
  return Student;
};