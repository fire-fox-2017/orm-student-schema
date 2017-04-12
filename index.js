"use strict"

const sqlite3 = require('sqlite3').verbose();
const db = require('./models');
// var file = './db/student.db';
// var db = new sqlite3.Database(file);

//Initialize REPLServer
const repl = require('repl');
let REPLServer = repl.start({prompt : '> '});

//Insert Student
//Move to student.js
//insert_student("Agus","Santoso","1995-02-03","agus_san@mail.com","0397123","167")
let insert_student = (firstname,lastname,birthdate,email,phone,height) => {
  db.Student.create({
    "first_name" : firstname,
    "last_name" : lastname,
    "birthdate" : birthdate,
    "email" : email,
    "phone" : phone,
    "height" : height
  })
  .then(student => {
    // console.log(student);
    console.log(JSON.stringify(student.toJSON(),null, 2));
  })
  .catch(err => {
    console.log(db.Student.msg);
  })
  return "Insert Student"
}

let get_full_name = () => {
    db.Student.findAll()
    .then(students => {
      students.forEach(student => {
        console.log(student.get_full_name());
      })
    })
  };

let get_age = () => {
  db.Student.findAll()
    .then(students => {
      students.forEach(student => {
        console.log(student.get_age());
      })
    })
  };

let get_all_data = () => {
  db.Student.get_all_data(function(students) {
    students.forEach(student => {
      console.log(`${student.id} ${student.first_name} ${student.last_name} |${student.birthdate}`);
    })
  })
}

let update_email = () => {
  db.Student.findAll()
    .then(students => {
      students.forEach(student => {
        console.log(student.update_email());
      })
    })
  };

REPLServer.context.insert_student = insert_student;
REPLServer.context.get_full_name = get_full_name;
REPLServer.context.get_age = get_age;
REPLServer.context.get_all_data = get_all_data;
