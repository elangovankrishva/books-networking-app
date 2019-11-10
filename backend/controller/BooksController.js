const Books = require('../models/Books');

exports.create = (req, res) => {
    const books = new Books(req.body);
    books.save()
        .then(books => {
            console.log('final data===>'+books);
            res.status(200).json({ "books": "books added successfully" });
        })
        .catch(err => {
            res.status(400).send("unable to save the books into database");
        });
};

exports.findAll = (req, res) => {
    Books.find(function (err, books) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(books);
        }
    });
};

exports.findOne = (req, res) => {
    Books.findById({ _id: req.params.id }, function (err, books) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(books);
        }
    });
};

exports.update = (req, res) => {
    Books.findById(req.params.id, function (err, books) {
        if (!books) {
            return next(new Error("Could not load Document"));
        } else {
            books.books_name = req.body.books_name;
            books.books_author = req.body.books_author;

            books.save().then(books => {
                res.json("Successfully Updated");
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
};

exports.delete = (req, res) => {
    Books.findByIdAndRemove({ _id: req.params.id }, function (err, books) {
        if (err) res.json(err);
        else res.json("Successfully removed");
    });
}
