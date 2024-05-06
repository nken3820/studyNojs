const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const meRouter = require('./me.route');

function route(app) {
    app.use('/me', meRouter);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = route;
