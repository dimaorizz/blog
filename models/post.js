const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: String,
    title: String,
    text: String,
    date: {
        type: Date,
        default: Date.now
    },
    likes: Number
});

module.exports = mongoose.model('posts', PostSchema)