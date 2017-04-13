"use strict"
const db = require('./models');
const repl = require('repl');

let rs = repl.start({prompt: '>> '});

let insertStudent = (firstname, lastname, birthdate, email, height, phone) => {
  db.Student.create({'firstname': firstname, 'lastname': lastname, 'birthdate': birthdate, 'createdAt': new Date(), 'updatedAt': new Date(), 'email': email, 'height': height, 'phone': phone})
  .then(student => {
    console.log(JSON.stringify(student.toJSON(), null, 2))
  })
  .catch(err => {
    console.log(err.message);
  })
  return 'insert student';
}
let all = () => {
  db.Student.getAllData(function(rows){
    rows.forEach(student => {
      console.log(student.id)
      console.log(student.firstname)
      console.log(student.lastname)
      console.log(student.getFullName())
    })
  })
} 

let fullname = () => {
  db.Student.getAllData((rows) => {
    rows.forEach(student => {
      console.log(student.getFullName())
    })
  })
}

let age = () => {
  db.Student.getAllData((rows) => {
    rows.forEach(student => {
      console.log(`${student.getFullName()} : ${student.getAge()} years old`)
    })
  })
}
rs.context.getAllData = all
rs.context.getFullName = fullname
rs.context.getAge = age
rs.context.insertStudent = insertStudent