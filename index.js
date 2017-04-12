"use strict"
const db = require('./models');
const repl = require('repl');

let data = {
  firstname : "Belanda",
  lastname : "Company",
  gender : "Laki",
  birthday : "1991-02-12",
  emails : "mixed@gmail.com",
  phone : "12345678912345678",
  height : "150"
}
let insert = ()=>{
  db.Student
    .create(data)
    .then((stdObj)=>{
    console.log(stdObj.dataValues);
    })
    .catch((err)=>{
      console.log(err.message);
    })
}


let getAllStudentData = () => {
  db.Student.getAllData((data)=>{
    data.forEach((value)=>{
      // console.log(value.toJSON());
      console.log(value.id);
      console.log(value.firstname);
      console.log(value.lastname);
      console.log(value.dataValues.fullname);
    })
  })
}

let getAgeStudentData = ()=>{
  db.Student.getAllData((data)=>{
    data.forEach((value)=>{
      // console.log(value.toJSON());
      console.log(value.id);
      console.log(value.firstname);
      console.log(value.lastname);
      console.log(value.dataValues.age);
    })
  })
}

// getAllStudentData()
// getAgeStudentData()
// let getAllData = ()=>{
//   db.Student.getAllData()
// }

const replStart = repl.start('> ');
//
replStart.context.getAllData = getAllStudentData
replStart.context.getAgeData = getAgeStudentData
replStart.context.create = insert
