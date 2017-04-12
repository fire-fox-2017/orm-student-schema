"use strict"

const repl = require('repl');

var db = require('./models');

let replServer = repl.start({prompt : '>'});

// let insertStudent = (firstname, lastname, birthdate) => {
//   db.Student.create({'firstname' : firstname, 'lastname' : lastname, 'birthdate' : birthdate})
//   .then(student => {
//     console.log(JSON.stringify(student.toJSON()), null, 2);
//   })
//
//   .catch(err => {
//     console.log(err.message);
//   })
//
//   return 'Insert Student';
// }

let insertStudent = (firstname, lastname, birthdate, emails, tinggi, phone) => {
  db.Student.create({'firstname' : firstname,
                     'lastname' : lastname,
                     'birthdate' : birthdate,
                     'emails' : emails,
                     'tinggi' : tinggi,
                     'phone' : phone})
  .then(student => {
    console.log(JSON.stringify(student.toJSON()), null, 2);
  })

  .catch(err => {
    console.log(err.message);
  })

  return 'Insert Student';
}

// let getAllData = () => {
//   db.Student.getAllData();
// }

let getAllData = () => {
  db.Student.getAllData(function(students){
    students.forEach(function(student){
      console.log(student.id);
      console.log(student.firstname);
      console.log(student.lastname);
      console.log(student.full_name);
    })
  })
}

let getFullName = () => {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      console.log(student.getFullName());
    })
  })
}

let getAge = () => {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      console.log(student.getAge());
    })
  })
}

replServer.context.insertStudent = insertStudent;
replServer.context.getAllData = getAllData;
replServer.context.getFullName = getFullName;
replServer.context.getAge = getAge;
