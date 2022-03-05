const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    default: ""
  }
}, {collection: "Users"});

module.exports = mongoose.model('User', UserSchema)
