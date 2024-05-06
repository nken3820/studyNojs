const Post = require('../models/Post');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [Get] /me/stored/news
    storedNews(req, res, next) {
        Post.find({})
            .then((Posts) => {
                res.render('me/storedNews', {
                    Posts: mutipleMongooseToObject(Posts),
                    helpers: {
                        sum(a, b) {
                            return a + b;
                        },
                    },
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
