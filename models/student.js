'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          
          Student.find({
            where: {email: value},
            attributes: ['id']
          })
          .then(function(error, user) {
            
            if (error)
            // Some unexpected error occured with the find method.
            return next(error);
            
            if (user)
            // We found a user with this email address.
            // Pass the error to the next method.
            return next('Email address already in use!');
            
            // If we got this far, the email address hasn't been used yet.
            // Call next with no arguments when validation is successful.
            next();
            
          });
          
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
        len: function(value){
          if(value.length<10 || value.length>13){
            throw new Error('Phone number length must be 10 - 13')
          }
        },
        isNumeric: {
          msg: "Letters are not allowed"
        }
      }
    },
    name:{
      type: DataTypes.STRING
    },
    address:{
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        Student.findAll()
        .then(rows => callback(rows))
      }
    },
    instanceMethods: {
      getFullName: function(){
        return this.firstname + ' ' + this.lastname
      },
      getAge : function(){
        let d = new Date()
        return d.getFullYear() - this.birthdate.getFullYear()
      }
    }
  });
  return Student;
};