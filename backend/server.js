const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const config = require('./db');
const PORT = 4000;

mongoose.connect(config.DB, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to books networking app" });
});

app.use(bodyParser.json());

require('./routes/BooksRoutes')(app);
require('./routes/UsersRoutes')(app);

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});
