"use strict"
let db = require('./models')

let data = {
  firstname: 'John',
  lastname: 'Doe',
  birthdate: '1990-09-16',
  email: 'johny@mail.org',
  height: 160,
  phone: '08579427991d',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}

function addData(data) {
  db.Student.create({
    firstname: data.firstname,
    lastname: data.lastname,
    birthdate: data.birthdate,
    email: data.email,
    height: data.height,
    phone: data.phone
  }).then(function() {
    console.log(`${data.firstname} inserted`);
  }).catch(function(err) {
    console.log(err.message);
  })
}

function getAllStudentData() {
  db.Student.getAllData((cb) => {
    cb.forEach((res) => {
      console.log(res.id);
      console.log(res.firstname);
      console.log(res.lastname);
      console.log(res.fullname);
    })
  })
}

function getAllAgeStudent() {
  db.Student.getAllAge((cb) => {
    cb.forEach((res) => {
      console.log(`${res.fullname} was age is ${res.age}`);
    })
  })
}
addData(data)
//getAllStudentData()
//getAllAgeStudent()