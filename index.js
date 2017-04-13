"use strict"
const db = require('./models')

// db.Student.create({
//   first_name: 'ridho',
//   last_name: 'pratama',
//   birth_date: '1994-09-23',
//   email: 'ridhopratama@gamil.com',
//   tinggi_badan: '175',
//   phone: '08888766712',
// }).then((student) => {
//   console.log(`${student.first_name} berhasil ditambah`);
// }).catch((err) => {
//   console.log(err.message);
// })

db.Student.getAllData((records) => {
  // console.log(records);
  records.forEach(record => {
    console.log("=====================================");
    console.log();
    console.log("id : ",record.id);
    console.log("age : ",record.getAge())
    console.log("first_name : ",record.first_name)
    console.log("last_name : ",record.last_name)
    console.log("full_name : ",record.full_name)
    console.log("birth_date : ",record.birth_date)

  })
})

// db.Student.findById(1)
//   .then(function(student) {
//   console.log(student.getAge());
// }).catch(err => {
//   console.log(err.message);
// })

// Model.Student.getFullName((param) => {
//
// })
