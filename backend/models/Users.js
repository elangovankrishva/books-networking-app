const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  user_name: String,
  user_email: String,
  user_publish_books: String,
  user_favorite_list: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', UserSchema);
