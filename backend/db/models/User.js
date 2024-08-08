const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
  },
  events: {
    attended: Int,
    saved: Int,
    missed: Int,
  },
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;