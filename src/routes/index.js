const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const meRouter = require('./me.route');
const userRouter = require('./user.route');

function route(app) {
    app.use('/user', userRouter);

    app.use('/me', meRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
