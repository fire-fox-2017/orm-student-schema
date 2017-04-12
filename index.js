"use strict"
const db = require('./models');
const repl = require('repl');

let replServer = repl.start({prompt: '$_$> '});

// Seeding
// db.Student.create({first_name: "David", last_name: "Johnson", birthdate: "1990-01-02"});
// db.Student.create({first_name: "Jamie", last_name: "Lamb", birthdate: "1991-01-02"});
// db.Student.create({first_name: "Ben", last_name: "Roth", birthdate: "1988-03-14"});
// db.Student.create({first_name: "Brandin", last_name: "Cook", birthdate: "1991-11-20"});



let getFullName = (id) => {
	db.Student.findById(id)
		.then(student => {
			// console.log(student.toJSON());
			console.log(student.getFullName());
		})
		.catch(err => {
			console.log(err.message);
		})

}

let getAge = (id) => {
	db.Student.findById(id)
		.then(student => {
			// console.log(student.toJSON());
			console.log(student.getAge());
		})
		.catch(err => {
			console.log(err.message);
		})

}

replServer.context.getFullName = getFullName;
replServer.context.getAge = getAge;



