const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const passport = require('passport');

class UserController {
    //[Get] /user/signin
    signin(req, res, next) {
        var messages = req.flash('error');
        res.render('user/signin', {
            messages: messages,
            hasErrors: messages.lenght > 0,
        });
    }

    //[Get] /user/signup
    signup(req, res, next) {
        var messages = req.flash('error');
        res.render('user/signup', {
            messages: messages,
            hasErrors: messages.lenght > 0,
        });
    }
}

module.exports = new UserController();
