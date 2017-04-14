'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.STRING,
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
          .then((value) => {
            if(value){
              return next(new Error("Email Sudah Dipakai"));
            } else {
              return next();
            }
          })
          // .then((err)=>{
          //   if(err){
          //     return next('Email Sudah Digunakan')
          //   }
          //   return next()
          // })
          // .catch((err)=>{
          //   return next(err)
          // })
        }
      }
    },
    phone: {
      type : DataTypes.STRING,
      validate : {
        // isNumeric : {
        //   args: true,
        //   msg: "Harus Angka"
        // },
        len : {
          args: [10,13],
          msg: "Panjang Ukuran Angka Telepon 10-13"
        },
        isNumeric: {
          args: true,
          msg: 'Phone not allow letters'
        },
        isAlphanumeric: {
          args: true,
          msg: 'Phone not allow alphanumeric'
        }
        // isCek : function(value) {
        //   // let pola1 = /[a-zA-Z]+/g; //cek huruf
        //   let pola1 = /[a-zA-Z]+/g; //cek huruf
        //   let pola2 = /\d/g; //cek angka
        //   let angka = parseInt(value);
        //   let tes1 = pola1.test(value);
        //   let tes2 = pola2.test(angka);
        //   if(tes1 == true && tes2 == true){
        //     throw new Error('Phone not allow alphanumeric')
        //   } else if(tes1 == true && tes2 == false){
        //     throw new Error('Phone not allow letters')
        //   }
        // }

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
      getAllData: function(callback){
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
      getFullName: function (callback) {
        return `${this.firstname} ${this.lastname}`;
      },
      getAge: function (callback) {
        let birthYear = this.birthdate.split('-');
        let umur = 2017 - (+birthYear[2]);
        return `Nama : ${this.firstname} Umur: ${umur}`;
      }
    }
  });
  return Student;
};
