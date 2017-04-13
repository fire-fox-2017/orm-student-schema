"use strict"

let db = require('./models');

db.Student.getAllData(function(students){
   console.log("===============get All Data=================");
   students.forEach(function(student) {
     console.log(`ID : ${student.id}`);
     console.log(`firstName : ${student.first_name}`);
     console.log(`lastName  : ${student.last_name}`);
     console.log(`full Name : ${student.first_name} ${student.last_name}`);
     console.log(`birthdate: ${student.birthdate.getDate()}-${student.birthdate.getMonth() + 1}-${student.birthdate.getFullYear()}`);
     console.log(`Age : ${student.getAge()}\n`);
   })
 })

let data = {
   firstname : "Testing",
   lastname : "Rahasia",
   birthday : "1991-02-12",
   email : "mixed@gmail.com",
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

insert();