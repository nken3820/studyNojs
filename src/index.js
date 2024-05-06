const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const { TRUE } = require('node-sass');
const app = express();
const port = 3000;

const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

require('./config/passport');

const methodOverride = require('method-override');

const db = require('./config/db');

// Connect db
db.connect();

const route = require('./routes');

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({ extended: TRUE }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// override with POST having ?_method=?
app.use(methodOverride('_method'));

//
app.use(
    session({
        secret: 'adsa897adsa98bs',
        resave: false,
        saveUninitialized: false,
    }),
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
