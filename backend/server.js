const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
const config = require('./db');
const mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to books networking app" });
});

require('./routes/BooksRoutes')(app);
require('./routes/UsersRoutes')(app);

app.listen(PORT, function () {
    console.log('Your node js server is running on PORT:', PORT);
});
