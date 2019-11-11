const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  user_name: String,
  user_email: String,
  user_publish_books: Array || null,
  user_favorite_list: Array || null
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', UserSchema);
