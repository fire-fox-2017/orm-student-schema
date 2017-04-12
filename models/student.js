'use strict';
module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birth_date: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                isUnique: function(value, next) {
                    if (value) {
                        Student
                            .find({
                                where: {
                                    email: value
                                }
                            })
                            .then((err) => {
                                if (err) {
                                    return next('Error')
                                } else {
                                    next()
                                }
                            })
                    }
                }
            }
        },
        height: {
            type: DataTypes.INTEGER,
            validate: {
                min: 150
            }
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [10, 13],
                    msg: `Phone length must be 10 - 13`
                },
                isNumeric: true,
                isAlphanumeric: {
                    msg: `Phone not allow alphanumeric`
                },
                isAlpha: {
                    msg: `Phone not allow letters`
                }
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here

            },
            getAllData: function(callback) {
                Student.findAll()
                    .then(rows => {
                        rows.forEach(row => {
                            row.full_name = row.getFullName()
                        })
                        callback(rows)
                    })
            }
        },
        instanceMethods: {
            getFullName: function() {
                return `${this.first_name} ${this.last_name}`
            },
            getAge: function() {
                let tempBirtdate = this.birth_date.split('-')
                let hasilPengurangan = 2017 - Number(tempBirtdate[0])
                return `${this.first_name} ${this.last_name} : ${hasilPengurangan} age`
            }

        }
    });
    return Student;
};