const Post = require('../models/Post');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [Get] /
    index(req, res, next) {
        Post.find({})
            .then((posts) => {
                res.render('home', {
                    posts: mutipleMongooseToObject(posts),
                });
            })
            .catch(next);
    }
}

module.exports = new SiteController();
