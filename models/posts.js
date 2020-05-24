// connecting mongoose to app.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// schema used for every post
let postSchema = new Schema({
    id: String,
    title: String,
    date: Date,
    description: String,
    text: String,
    country: String,
    imageURL: String
});

// convert schema into class, then later into documents
let Post = mongoose.model('Post', postSchema);

// exporting
module.exports = { Post };