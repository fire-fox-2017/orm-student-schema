'use strict';

var Sequelize = require("sequelize");

module.exports = function(sequelize) {
  var Student = sequelize.define('Student', {
    firstname: { type: Sequelize.STRING, allowNull: false },
    lastname: { type: Sequelize.STRING, allowNull: false },
    birthdate: { type: Sequelize.STRING, allowNull: false },
    email: {
            type: Sequelize.TEXT,
            allowNull: false,
            //isUnique: true
            validate: {
                isEmail: true,
                isUnique: function(value, next) {
                  Student.find({
                    where: {
                      email: value
                    }
                  }).then(function(error) {
                    if (error)
                      return next('Email address already in use!');
                    next();
                  });
                }
            }
        },
        height: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                min: 150
            }
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,

            validate: {
                isAlphanumeric: function (value, next) {
                              let phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
                              if(phoneno.test(value)) 
                                next();
                              return next('Format phone not valid');
                              
                            }  
            }
}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback) {
        let fullName = []
        Student.findAll()
          .then((rows)=>{
            rows.forEach((row)=>{
              let obj = {};
              obj['id'] = row.id;
              obj['firstname'] = row.firstname;
              obj['lastname'] = row.lastname;
              obj['fullname'] = row.getFullName();
              fullName.push(obj)
            })
            callback(fullName)
          })

        
      },
      getAllAge: function(callback) {
        let ages = []
        Student.findAll()
          .then((rows)=>{
            rows.forEach((row)=>{
              //console.log(row.toJSON())
              let obj = {};
              obj['fullname'] = row.getFullName();
              obj['birthdate'] = row.birthdate;
              obj['age'] = row.getAge();
              ages.push(obj)
            })
            callback(ages)
          })
        
      }
     
    }, 
    instanceMethods: {
      getFullName: function(){
        return `${this.firstname} ${this.lastname}`
      },
      getAge: function(){
        let today = new Date();
        let birthDate = new Date(this.birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
      }
    }
  });
  return Student;
};