const User = require('../models/users');

module.exports = {
    getUsers(req, res) {
        User.find({}, (err, users)=> {
            if (!err) {
                res.status(200).send({
                    success: true,
                    msg: "User fetched successfully",
                    users: users
                })
            }
        })
    },
    createUser(req, res) {
        let user_data = req.body;

        User.findOne({phone: user_data.phone}, (err, userExists)=> {
            if (!err && userExists != null) {
                res.status(401).send({
                    success: false,
                    msg: "User already exists with this mobile number"
                })
            } else {
                User.create(req.body, (err, newUser)=> {
                    if (!err && newUser != null) {
                        res.status(200).send({
                            success: true,
                            msg: "User created successfully",
                            user: newUser
                        })
                    }
                })
            }
        })
    }
}