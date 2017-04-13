'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    email: {
      type: DataTypes.TEXT,
      validate: {
        isEmail: true,
        isUnique: (value, next) => {
          // let self = this
          Student.find({
            where : { email : value }
          }).then((student) => {
            if(student) {
              return next('Email sudah digunakan !')
            } else{
              return next()
            }
          }).catch((err) => {
            return next(err.message)
          })
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate: {min : 150, isNumeric : true}
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        len: [9, 13],
        isAlphanumeric : false,
        isNumeric: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: (callback) => {
        Student.findAll()
          .then (records => {
            records.forEach (record => {
              record['full_name'] = `${record.first_name} ${record.last_name}`
            })
            callback(records)
          })
      }
    },
    instanceMethods: {
      getFUllName: () => {
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function() {
        let now = new Date().getFullYear()
        let age = now - this.birth_date.getFullYear()
        return age
      }
    }
  });
  return Student;
};
