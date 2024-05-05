const Post = require('../models/Post');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
    // [Get] /news
    show(req, res, next) {
        // Post.findOne({slug: req.params.slug})
        // .then((posts) => {
        //     res.render('news',{
        //         posts: mongooseToObject(posts),
        //     });
        // })
        // .catch(next);

        Promise.all([
            Post.find({}).then((posts) => mutipleMongooseToObject(posts)),
            Post.findOne({ slug: req.params.slug }).then((post) =>
                mongooseToObject(post),
            ),
        ])
            .then(([posts, post]) => {
                // Truyền dữ liệu vào hàm render
                res.render('news', {
                    posts: posts,
                    post: post,
                });
            })
            .catch(next);
    }
}

module.exports = new NewsController();
