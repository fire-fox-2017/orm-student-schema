'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.TEXT,
    last_name: DataTypes.TEXT,
    birth_date: DataTypes.TEXT,
    email:{
      type:DataTypes.TEXT,
      validate:{
        // notNull:true,
        isEmail:true,
        isUnique:function(value,next){
          Student.find({
            where:{email:value}
          }).then(function(err){
            if(err){
              return next('email existed')
            } else {
            next()
            }
          })
        }
      }
    },
    height:{
      type:DataTypes.INTEGER,
      validate:{
        min:{
          args:150,
          msg:'minimum 150'
        },
        //min:150,
        isNumeric:true
      }
    },
    phone:{
      type:DataTypes.TEXT,
      validate:{
        cekValidasi:function(value){
          let cek=/[a-zA-Z]/g;
          if(cek.test(value)){
            let cek=/[^a-zA-Z0-9]/g;
            if(cek.test(value)){
              throw new Error('phone not allow anything other than number')
            } else {
              throw new Error('Phone not allow letter')
            }
          } else {
            let cek=/[^a-zA-Z0-9]/g;
            if(cek.test(value)){
              throw new Error('phone not allow anything other than number2')
            } else {
              if(value.length>13 || value.length<10){
                throw new Error('phone length must be 10-13')
              }
            }
          }
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      getAllData: function(callback){
        Student.findAll()
        .then(rows => {
          rows.forEach(row => {
            row.full_name = row.getFullName()
          })
          callback(rows)
        })
      }
    },
    instanceMethods:{
      getFullName: function(){
        return `${this.first_name} ${this.last_name}`
      },
      getAge: function(){
        let now = new Date();
        let this_year = String(now).match(/\d{4}/);
        let birth_year = this.birth_date.match(/\d{4}/);
        return `${this_year - birth_year}`
      }
    }
  });
  return Student;
};
