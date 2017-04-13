"use strict"

const db = require("./models");
const repl = require("repl");
const replServer = repl.start({prompt: "> "});

let create = (firstname, lastname, birthdate, height, email, phone) => {
  db.Student.create({"first_name": firstname, "last_name": lastname, "birth_date": birthdate, "height": height, "email": email, "phone": phone})
    .then((data) => {
      console.log("Student is successfully registered into the table.");
    })
    .catch((err) => {
      console.log("Error: " + err);
    });
}

let getFullName = () => {
  db.Student.findAll()
    .then((students) => {
      students.forEach((student) => {
        console.log(student.getFullName());
      });
    })
    .catch();
}

let getAge = () => {
  db.Student.findAll()
    .then((students) => {
      students.forEach((student) => {
        console.log(student.getAge());
      });
    })
    .catch();
}

let getAllData = () => {
  db.Student.getAllData((students) => {
    students.forEach((student) => {
      console.log(student.id);
      console.log(student.first_name);
      console.log(student.last_name);
      console.log(student.full_name);
    });
  });
}

replServer.context.create = create;
replServer.context.getFullName = getFullName;
replServer.context.getAge = getAge;
replServer.context.getAllData = getAllData;
