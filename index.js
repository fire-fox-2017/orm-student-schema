"use strict"

const repl = require('repl');
//write your code here
let replServer = repl.start({
    prompt: '> '
});

let db = require('./models')


let getFullNameStudent = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getFullName());
            })
        })
}

let getAgeStudent = () => {
    db.Student.findAll()
        .then(students => {
            students.forEach(student => {
                console.log(student.getAge());
            })
        })
}

let getAllDataStudent = () => {
    db.Student.getAllData(function(students) {
        students.forEach(function(student) {
            console.log(student.id);
            console.log(student.first_name);
            console.log(student.last_name);
            console.log(student.full_name);
        })
    })
}

let data = {
    first_name: 'Test',
    last_name: 'Test122',
    birth_date: '1922-09-12',
    email: 'testsdsdcom',
    height: '110',
    phone: 'a3s_a4'
}

function addStudent(data) {
    db.Student.create({
            first_name: data.first_name,
            last_name: data.last_name,
            birth_date: data.birth_date,
            email: data.email,
            height: data.height,
            phone: data.phone
        })
        .then(() => {
            console.log('test');
        })
        .catch((err) => {
            console.log(err.message);
        })

}

replServer.context.getFullNameStudent = getFullNameStudent
replServer.context.getAgeStudent = getAgeStudent
replServer.context.getAllDataStudent = getAllDataStudent
replServer.context.addStudent = addStudent