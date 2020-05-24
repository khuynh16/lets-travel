// connecting mongoose to app.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema used for every post
let userSchema = new Schema({
    email: String,
    password: String
});

// convert schema into class, then later into documents
let User = mongoose.model('User', userSchema, 'users');

// exporting
module.exports = { User };