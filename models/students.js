'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Student.find({where: {email: value}})
            .then((value) => {
              if(value) {
                return next(new Error("Email is already taken."));
              } else {
                return next();
              }
            });
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "Must be taller than 150 cm"
        },
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "Validation error: Phone length must be 10-13 digits."
        },
        isAlpha: function(value) {
          let val = String(value);
          if(!(/^[0-9]+$/g.test(val))) {
            throw new Error("Validation error: Phone cannot be alphanumeric.")
          }
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
          .then((students) => {
            students.forEach((student) => {
              student.full_name = student.getFullName();
            });
            callback(students);
          })
          .catch((err) => {
            callback(err);
          });
        }
    },
    instanceMethods: {
      getFullName: function() {
        return this.first_name + " " + this.last_name;
      },
      getAge: function() {
        let now = new Date();
        let dob = new Date(this.birth_date);
        return now.getFullYear() - dob.getFullYear();
      }
    }
  });
  return Student;
};
