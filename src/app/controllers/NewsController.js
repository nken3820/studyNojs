const Post = require('../models/Post');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
    // [Get] /news/:slug
    show(req, res, next) {
        Promise.all([
            Post.find({}).then((posts) => mutipleMongooseToObject(posts)),
            Post.findOne({ slug: req.params.slug }).then((post) =>
                mongooseToObject(post),
            ),
        ])
            .then(([posts, post]) => {
                // Truyền dữ liệu vào hàm render
                res.render('news/show', {
                    posts: posts,
                    post: post,
                });
            })
            .catch(next);
    }

    // [Get] /news/create
    create(req, res, next) {
        res.render('news/create');
    }

    // [Post] /news/store
    store(req, res, next) {
        const formdata = req.body;
        const post = new Post(formdata);
        post.save()
            .then(() => res.redirect('/'))
            .catch((error) => {});
    }
}

module.exports = new NewsController();
