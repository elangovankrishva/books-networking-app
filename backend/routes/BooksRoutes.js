module.exports = (app) => {
    const books = require('../controller/BooksController');

    app.post('/api/books/add', books.create);
    app.get('/api/books', books.findAll);
    app.get('/api/books/:id', books.findOne);
    app.post('/api/books/update/:id', books.update);
    app.delete('/api/books/delete/:id', books.delete);
}
