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

    //[Get] /news/:id/edit
    edit(req, res, next) {
        Post.findById(req.params.id)
            .then((posts) =>
                res.render('news/edit', {
                    posts: mongooseToObject(posts),
                }),
            )
            .catch(next);
    }

    //[Put] /news/:id
    update(req, res, next) {
        Post.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/stored/news');
            })
            .catch(next);
    }

    //[Delete] /news/:id
    delete(req, res, next) {
        Post.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new NewsController();
