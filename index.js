"use strict"

let model = require('./models')

const repl = require('repl');


var siswa = {
  firstName: "Oscar",
  lastName:"Hermawan",
  birthDate:"2006-02-10",
  email:"haha@gmail.com",
  height:130,
  phone:12345677910
}


//CREATE
function createSiswa(){
  model.Student.create(siswa)
        .then((instance)=>{
          console.log("Data Berhasil diinput")
        })
        .catch( (err) => {
          console.log("ini error: ", err.message)
        } )
}

function showFullName(){
  model.Student.getAllData(function(students){
    students.forEach(function(student){
      console.log(student.dataValues.fullName)
    })
  })
}

function getFullName(){
  model.Student.findAll()
  .then((students)=>{
    students.forEach((student)=>{
      console.log(student.getFullName())
    })
  })
}

function getAge(){
  model.Student.findAll()
  .then((students)=>{
    students.forEach((student)=>{
      console.log(`${student.getFullName()} ${student.getAge()}`)
    })
  })
}



let start = repl.start("> ")
start.context.showFullName = showFullName
start.context.getFullName = getFullName
start.context.getAge = getAge
start.context.createSiswa = createSiswa