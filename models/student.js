'use strict';
const db = require('../models');
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          // if (err){
          //   throw new Error(`Email address harus mengandung '@ ' dan '.'`)
          // }
          msg: `Email address harus mengandung '@ ' dan '.'`
        },
        isUnique: function(value, next) {
          var self = this;
          Student.find({
            where: {
              email: value
            }
          })
          .then(function(user) {
            if (user && self.id !== user.id) {
              return next('Email already in use!');
            }
            return next();
          })
          .catch(function(err) {
            return next(err);
          });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: `Phone length must be 10-13`
        },
        isNumeric: {
          args: true,
          msg: `Phone not allow letters,
          Phone not allow alphanumeric`
        }
      }
    },
    height: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
                min: {
                    args: 151,
                    msg: 'Tinggi diatas 150'
                }
            }
        }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      get_all_data: function(callback){
        Student.findAll()
        .then(students => {
          students.forEach(student => {
            student.full_name = student.get_full_name()
          })
          callback(students)
        })
        .catch(function(err){
          return err;
        })
      }
    },
    instanceMethods: {
      //Show Full Name
      get_full_name: function(){
          return `${this.first_name} ${this.last_name}`;
      },

      //Calculate Age
      get_age: function(){
        let birthdate = new Date(this.birthdate);
        let now = new Date();
        return `${this.first_name} ${this.last_name}  ${parseInt(now.getFullYear()) - parseInt(birthdate.getFullYear())}`
      }
    }

  });
  return Student;
};
