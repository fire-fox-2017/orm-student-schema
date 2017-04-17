'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          if (value) {
            Student
              .find({
                  where: {
                      email: value
                  }
              })
              .then((err) => {
                  if (err) {
                      return next('Error')
                  } else {
                      next()
                  }
              })
          }
        }
      }
    },
    height: {
        type: DataTypes.INTEGER,
        validate: {
            min: 150
        }
    },
    phone: {
        type: DataTypes.STRING,
        validate: {
            len: {
                args: [10, 13],
                msg: `Phone length must be 10 - 13`
            },
            isNumeric: true,
            isAlphanumeric: {
                msg: `Phone not allow alphanumeric`
            },
            isAlpha: {
                msg: `Phone not allow letters`
            }
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll()
        .then(students => {
          students.forEach(student => {
            student.fullname = student.getFullName();
          })
          callback(students);
        });
      }
    },
    instanceMethods: {
      getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
      },
      getAge: function() {
        let now = new Date();
        return now.getFullYear() - this.birthdate.getFullYear();
      }
    }
  });
  return Student;
};
