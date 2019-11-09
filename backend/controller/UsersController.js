const Users = require('../models/Users');

exports.create = (req, res) => {
    const users = new Users(req.body);
    users.save()
        .then(users => {
            console.log(users);
            res.status(200).json({ "users": "users added successfully" });
        })
        .catch(err => {
            res.status(400).send("unable to save the users into database");
        });
};

exports.findAll = (req, res) => {
    Users.find(function (err, users) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
};

exports.findOne = (req, res) => {
    Users.findById({ _id: req.params.id }, function (err, users) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
};

exports.update = (req, res) => {
    Users.findById(req.params.id, function (err, users) {
        if (!users) {
            return next(new Error("Could not load Document"));
        } else {
            users.users_name = req.body.users_name;
            users.users_author = req.body.users_author;

            users.save().then(users => {
                res.json("Successfully Updated");
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
};

exports.delete = (req, res) => {
    Users.findByIdAndRemove({ _id: req.params.id }, function (err, users) {
        if (err) res.json(err);
        else res.json("Successfully removed");
    });
}
