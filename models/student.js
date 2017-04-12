'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: { 
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
        isUnique: function (value, next) {
            var self = this;
            Student.find({where: {email: value}})
                .then(function (student) {
                    // reject if a different student wants to use the same email
                    if (student && self.id !== student.id) {
                        return next('Email already in use!');
                    }
                    return next();
                })
                .catch(function (err) {
                    return next(err);
                });
        }

      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150.1
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isLength: (value) => {
          if(value.length <10 || value.length > 13)
            throw new Error ('Phone length must be 10 - 13');
        },
        isNotLetters: (value) => {
          // var regex = new RegExp('[a-z]+');
          
          if(/^[a-zA-Z]+$/.test(value))
            throw new Error ('Phone not allow letters');
        },
        isNotAlphaNumbericCustom: (value) => {
          if(/[a-zA-Z]+/.test(value))
            throw new Error ('Phone not allow alphanumeric');
        }

      }

    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        this.findAll()
          .then(students => {
            // students.forEach( student => {
            //   // console.log(`--- ${student.id} ${student.first_name} ${student.last_name} ${student.birthdate} ${student.full_name}`);

            //   student.setDataValue("full_name", student.first_name + " " + student.last_name);
              
            //   // console.log(`******* ${student.id} ${student.first_name} ${student.last_name} ${student.birthdate} ${student.getDataValue('full_name')}`);
            //   // console.log(`here   ${student.getDataValue('full_name')}`);

            //   // console.log(student.toJSON());
            // })

            for (let i = 0 ; i < students.length ; i++) {
              students[i].setDataValue("full_name", students[i].first_name + " " + students[i].last_name);
            }

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
  }, {
    indexes: [
      // Create a unique index on email
      {
        unique: true,
        fields: ['email']
      }
    ]
  });
  return Student;
};