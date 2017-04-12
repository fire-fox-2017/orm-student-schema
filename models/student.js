'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.CHAR,
    birthday: DataTypes.DATE,
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
    height: {
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
      getAllData: function (callback) {
        // let simpan = []
        Student.findAll()
               .then((Students)=>{
                 Students.forEach((student)=>{
                   student.setDataValue('fullname', student.getFullName())
                   student.setDataValue('age', student.getAge())
                  //  console.log(student.toJSON());
                 })
                callback(Students)
               })
      }
    },
    instanceMethods: {
      getFullName : function(){
        return `${this.firstname} ${this.lastname}`
      },
      getAge : function () {
        let now = new Date()
        return `${now.getFullYear() - this.birthday.getFullYear()}`
      }
    }
  });
  return Student;
};