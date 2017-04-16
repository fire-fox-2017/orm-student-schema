"use strict"
const db = require('./models');
const repl = require('repl');
const sqlite = require('sqlite3').verbose();

let replServer = repl.start({
    prompt: '> '
});

let getAgeStudents = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getAge())
            })
        })
}

let getFullNameStudent = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getFullname())
            })
        })
}
let getAllData = () => {
    var all = db.Student.getAllData(function(students) {
        students.forEach(function(student) {
            console.log(student.id);
            console.log(student.first_name);
            console.log(student.last_name);
            console.log(student.full_name);
        })
    })
}

let insertStudent = (first_name, last_name, height, phone, birth_date, email) => {
    db.Student.create({
        'first_name': first_name,
        'last_name': last_name,
        'height': height,
        'phone': phone,
        'birth_date': birth_date,
        'email': email
    }).then(student=>{
      console.log(JSON.stringify(student.toJSON(),null,2));
    }).catch(err=>{
      console.log(err.message);
    })
}
replServer.context.insertStudent = insertStudent
replServer.context.getAllData = getAllData
replServer.context.getAgeStudents = getAgeStudents
replServer.context.getFullNameStudent = getFullNameStudent
