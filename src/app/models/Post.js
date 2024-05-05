const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Post = new Schema(
    {
        title: { type: String, default: '', required: true },
        header: { type: String, default: '', required: true },
        details_post: { type: String, default: '', required: true },
        image: { type: String, default: '', required: true },
        slug: { type: String, slug: 'title', unique: true },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Post', Post);
