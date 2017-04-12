'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    emails: {
      type : DataTypes.STRING,
      validate : {
        isEmail : true,
        isUnique : (value, next)=>{
          Student.find({
            where: {
              emails : value
            }
          })
          .then((err)=>{
            if(err){
              return next('email already in use')
            }
            return next()
          })
          .catch((err)=>{
            return next(err)
          })
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate : {
        isNumeric : true,
        len : [8,17]
      }
    },
    tinggi: {
      type : DataTypes.STRING,
      validate : {
        min : 150
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
            })
            callback(students);
          })
      }
    },
    instanceMethods: {
      getFullName: function(callback) {
        return `${this.firstname} ${this.lastname}`;
      },
      getAge: function(callback) {
        let birthYear = this.birthdate.split('-');
        let umur = 2017 - (+birthYear[2]);
        return `Nama : ${this.firstname} Umur: ${umur}`;
      }
    }
  });
return Student;
};
