'use strict';
module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: `Email address harus mengandung '@ ' dan '.'`
                },
                isUnique: function(value, next) {
                    var self = this;
                    Student.find({
                            where: {
                                email: value
                            }
                        })
                        .then(function(user) {
                            if (user && self.id !== user.id) {
                                return next('Email already in use!');
                            }
                            return next();
                        })
                        .catch(function(err) {
                            return next(err);
                        });
                }
            }
        },
        tinggi_badan: {
            type: DataTypes.INTEGER,
            validate: {
                isInt: true,
                min: {
                    args: 151,
                    msg: 'Tinggi diatas 150'
                }
            }
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [10, 13],
                    msg: `Phone length must be 10-13`
                },
                isNumeric: {
                    args: true,
                    msg: `Phone not allow letters,
                    Phone not allow alphanumeric`
                }
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            },
            getAllData: function(callback) {
                Student.findAll().then(arrRow => {
                    arrRow.forEach((row) => {
                        row.full_name = `${row.getFullName()}`;
                    })
                    callback(arrRow);
                });
            }
        },
        instanceMethods: {
            getFullName: function() {
                return `${this.first_name} ${this.last_name}`;
            },
            getAge: function() {
                let str = this.birthdate;
                let now = new Date;
                let temp = now.getFullYear() - Number(str.slice(0, 4));
                return `${this.first_name} ${this.last_name} - ${temp}`;
            }
        }
    });
    return Student;
};
