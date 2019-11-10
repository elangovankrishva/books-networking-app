const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
  books_name: String,
  books_author: String,
  books_isbn: String,
  books_price: Number,
  books_qty: String,
  books_addedby: String || null
}, {
    timestamps: true
});

module.exports = mongoose.model('Books', BooksSchema);
