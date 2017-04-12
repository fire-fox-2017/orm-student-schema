"use strict"
let db = require("./models");
const repl = require('repl');
const replServer = repl.start({
    prompt: '> '
});

let insertStudent = (firstname, lastname, birthday, email, tinggi, phone) => {
    db.Student.create({
            'first_name': firstname,
            'last_name': lastname,
            'birthdate': birthday,
            'email': email,
            'tinggi_badan': tinggi,
            'phone': phone
        })
        .then(result => {
            console.log(JSON.stringify(result.toJSON(), null, 2));
        })
        .catch(err => {
            console.log("ERR Input : " + err);
        })
}
let getFullname = () => {
    db.Student.findAll()
        .then(arrStudents => {
            arrStudents.forEach(Students => {
                console.log(Students.getFullName());
            });
        })
    return 'Query getFullName Succes';
}
let getAge = () => {
    db.Student.findAll()
        .then(arrStudents => {
            arrStudents.forEach(Students => {
                console.log(Students.getAge());
            });
        })
    return 'Query getAge Succes';
}
let all = () => {
    db.Student.getAllData(function(arrStudent) {
        arrStudent.forEach(function(student) {
            console.log(student.id);
            console.log(student.first_name);
            console.log(student.last_name);
            console.log(student.full_name);
        })
    });
}
replServer.context.insert = insertStudent;
replServer.context.getFull = getFullname;
replServer.context.getAge = getAge;
replServer.context.getAll = all;
