class SiteController {
    // [Get] /
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController();
