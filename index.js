"use strict"

const db = require('./models');
const repl = require('repl');
let replServer = repl.start({prompt: '> '});

let insertStudent = (firstname, lastname, birthdate, height, email, phone) => {
  db.Student.create({"firstname":firstname, "lastname":lastname, "birthdate":birthdate,
  "height":height, "email":email, "phone": phone})
  .then(student => {
    console.log(JSON.stringify(student.toJSON(), null, 2));
  })
  .catch(err => {
    console.log(err);
  });
  return `insert student`;
}

// let insertStudent = (object) => {
//   db.Student.create({"firstname":obj.firstname, "lastname":obj.lastname, "birthdate":obj.birthdate,
//   "height":obj.height, "email":obj.email, "phone":obj.phone})
//   .then(student => {
//     console.log(JSON.stringify(student.toJSON(), null, 2));
//   })
//   .catch(err => {
//     console.log(err);
//   });
//   return `insert student`;
// }

let getFullName = () => {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      console.log(student.getFullName());
    });
  })
  .catch(err => {
    console.log(err);
  });
}

let getAge = () => {
  db.Student.findAll()
  .then(students => {
    students.forEach(student => {
      console.log(student.getAge());
    });
  })
  .catch(err => {
    console.log(err);
  });
}

let getAllData = () => {
  db.Student.getAllData(students => {
    students.forEach(student => {
      console.log(student.id);
      console.log(student.firstname);
      console.log(student.lastname);
      console.log(student.fullname);
    });
  });
}

replServer.context.insertStudent = insertStudent;
replServer.context.getFullName = getFullName;
replServer.context.getAllData = getAllData;
replServer.context.getAge = getAge;
