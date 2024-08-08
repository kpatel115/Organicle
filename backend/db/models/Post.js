const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  post: {
    type: String,
    required: true,
    unique: true,
  },
  comments: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;