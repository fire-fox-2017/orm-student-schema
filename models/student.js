'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birtday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUnique: (value, next) => {
          Student.find({

          })
        },
        isEmail: true
      }
    },
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
      getAllData : function(callback){
        Student.findAll()
          .then(rows => {
            rows.forEach(row => callback(rows)
          })
      }
    }
  });
  return Student;
};
