const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema({
    title: { type: String, default: '' },
    header: { type: String, default: '' },
    details_post: { type: String, default: '' },
    image: { type: String, default: '' },
    createdAT: { type: Date, default: Date.now },
    updatedAT: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', Post);
