"use strict"
const repl = require('repl');
const replServer = repl.start({prompt:'>=>=> '});
const folder = require('./models');

let insertStudent = (firstname,lastname,birthdate,email,height,phone) => {
  folder.Student.create({
    first_name : firstname,
    "last_name" : lastname,
    "birth_date" : birthdate,
    "email" : email,
    "height" : height,
    "phone" : phone
  })
  .then(() => {
    console.log('success!');
  })
  .catch((err) => {
    //console.log(db.Student.msg);
    console.log(err.message);
  })
}

let showAllStudent = function (){
  folder.Student.findAll().then(student =>{
    for(let i=0;i<student.length;i++){
      console.log(student[i].getFullName());
    }
  })
}

let showAllStudentAge = function (){
  folder.Student.findAll().then(student =>{
    for(let i=0;i<student.length;i++){
      console.log(student[i].getAge());
    }
  })
}

let showAllStudentDetail = function(){
  folder.Student.getAllData(function(students){
    // students.forEach(function(student){
    //   console.log(student.id);
    //   console.log(student.first_name);
    //   console.log(student.last_name);
    //   console.log(student.full_name);
    // })
    for(let i=0;i<students.length;i++){
      console.log(students[i].id);
      console.log(students[i].first_name);
      console.log(students[i].last_name);
      console.log(students[i].full_name);
    }
  })
}



replServer.context.a = showAllStudent;
replServer.context.b = showAllStudentAge;
replServer.context.c = showAllStudentDetail;
replServer.context.d = insertStudent;
