const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: { type: String, require: true },
        password: { type: String, require: true },
    },
    {
        timestamps: true,
    },
);

User.methods.encryptPasswprd = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

User.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);
