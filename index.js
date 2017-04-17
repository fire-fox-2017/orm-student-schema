"use strict"
const db=require('./models/index.js');
const repl = require('repl');
const r=repl.start('$ ');

let insertStudent = (firstname,lastname,birthday,email,tinggi,phone)=>{
  db.Student.create({'firstname':firstname,'lastname':lastname,'birthday':birthday,'email':email,'tinggi':tinggi,'phone':phone})
  .then (student => {
    console.log(JSON.stringify(Student.toJson()))
  })
  .catch (err =>{
    console.log(err.message);
  });
  }
// db.Student.create({'firstname':'john','lastname':'doe','birthday':new Date('1992-11-10')})
// db.Student.create({'firstname':'jean','lastname':'patrick','birthday':new Date('1989-11-10')})
// db.Student.create({'firstname':'jay','lastname':'big','birthday':new Date('1990-11-10')})
//insertStudent('test','test',new Date('1992-11-10'),'john@gmail.com',165,'081223349012') true
//insertStudent('test','test',new Date('1992-11-10'),'john@gmail.com',165,'08122334')
//insertStudent('test','test',new Date('1992-11-10'),'john@gmail.com',145,'081223344556')


let getFullName=()=>{
  db.Student.findAll()
    .then (students=>{
      console.log('\nFULLNAME:')
      students.forEach(student=>{
        console.log(student.getFullName());
      });
    });
  }

let getAge=()=>{
  db.Student.findAll()
  .then (students=>{
    console.log('\nAGE:')
    students.forEach(student=>{
      console.log(student.getAge());
    });
  });
}

let getAllData=()=>{
  db.Student.getAllData(students =>{
      students.forEach(student => {
        console.log('\nALL DATA:')
        console.log(student.id)
        console.log(student.firstname)
        console.log(student.lastname)
        console.log(student.getFullName())
        console.log(student.email)
        console.log(student.tinggi)
        console.log(student.phone)
      });
  });
}




r.context.insertStudent = insertStudent;
r.context.getFullName = getFullName;
r.context.getAllData = getAllData;
r.context.getAge = getAge;
