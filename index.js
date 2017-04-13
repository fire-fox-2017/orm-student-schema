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
   });
 });

let data = {
   firstname : "Testing",
   lastname : "Rahasia",
   birthdate : new Date('1991-02-12'),
   email : "mixedsad@gmail.com",
   phone : "08129912099",
   height : "150"
 }

let insert = () => {
   db.Student.create({
    first_name: data.firstname,
    last_name: data.lastname,
    birthdate: data.birthdate,
    email: data.email,
    height: data.height,
    phone: data.phone
   })
   .then(() => {
      console.log('success add data');
   })
   .catch((err) => {
      console.log(err);
   });
     
 }

// insert();

