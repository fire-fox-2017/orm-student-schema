var UserModel = sequelize.define('User', {

    id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isUnique: function(value, next) {

                UserModel.find({
                    where: {email: value},
                    attributes: ['id']
                })
                    .done(function(error, user) {

                        if (error)
                            // Some unexpected error occured with the find method.
                            return next(error);

                        if (user)
                            // We found a user with this email address.
                            // Pass the error to the next method.
                            return next('Email address already in use!');

                        // If we got this far, the email address hasn't been used yet.
                        // Call next with no arguments when validation is successful.
                        next();
                    });
            }
        }
    }

});

insert_student("Joko","Agus",120,"0288384956","1989-06-23","joko@gmail.com")
