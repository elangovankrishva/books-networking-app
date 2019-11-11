const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  user_name: String,
  user_email: String,
  user_publish_books: String || null,
  user_favorite_list: String || null
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', UserSchema);
