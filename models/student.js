'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email:{
      type:DataTypes.TEXT,
      validate:{
        isEmail:true,
        isunique:function(value, next){
          let self = this
          Student.find({
            where:{
              email:value
            }
          }).then(function(student){
            if(student){
              return next('Email sudah ada')
            }
            return next()
          }).catch(function(err){
            return next(err)
          })
        }
      }
    },
    height:{
      type:DataTypes.INTEGER,
      validate: {min: 150, isNumeric : true}
    },
    phone:{
      type:DataTypes.INTEGER,
      validate:{
        len:[10,13],
        isAlphanumeric:false,
        isNumeric:true
      } 
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },

      getAllData:function(callback){
        Student.findAll()
                .then((students)=>{
                  students.forEach((student)=>{
                    let firstName = student.firstName
                    let lastName = student.lastName
                    let fullname = `${firstName} ${lastName}`
                    student.setDataValue('fullName', fullname)
                  })
                  callback(students)
                })
      }
    },

    instanceMethods:{
      getFullName:function(){
        return `${this.firstName} ${this.lastName}`
      },

      getAge:function(){
        let now = new Date().getFullYear();
        let tahunLahir = this.birthDate.getFullYear();
        return now-tahunLahir;
      }
    }




  });
  return Student;
};