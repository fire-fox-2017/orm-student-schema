'use strict';
module.exports = function(sequelize, DataTypes) {
  var teacher = sequelize.define('teacher', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return teacher;
};