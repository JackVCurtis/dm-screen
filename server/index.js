var fs = require("fs");
var mongoose = require ("mongoose");
var express = require('express');
var expressJwt = require('express-jwt');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require("path");

// fake config object
var Config = function(settings){

    this.settings = settings;

    this.get = function(key){
        return this.settings[key];
    }
};

var conf = new Config({
    'mongo:uri': 'localhost:27017/dungeons-and-dragons',
    'NODE_ENV': 'local',
    'PORT': 3000,
    'login-url': '/'
});

// Initialize the connection to mongo using the URL from the config
var mongoUri = conf.get('mongo:uri');

console.log('Connecting to ' + mongoUri + '...' );

mongoose.connect(mongoUri, function (err, res) {
    if (err) {
        console.log ('Error connecting to Mongo: ' + mongoUri + '. ' + err);
    } else {
        console.log ('Successfully connected to Mongo: ' + mongoUri);
    }
});

// Initialize the base express application
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', require('./routes/MonsterActions.js'));

app.get('*', function(req, res, next) {
    if (req.url.indexOf('build') > -1) return next();

    res.render('index', {});
});

// Error handling middleware
app.use('/api', function(err, req, res, next) {
    if (err.status === 401) {
        res.status(401).send('Not authorized');
    }
    else if (err.status >= 500 || err.statusCode >= 500){
        console.log('Service Error: ' + err.message);
        res.status(err.status || err.statusCode || 500);
        res.json({
            message: err.message,
            error: err
        });
    }
});

app.use(function(err, req, res, next){
    if(err.status == 401){
        res.redirect(conf.get('login-url'));
    }
});

process.on('uncaughtException', function(err) {
    console.error('Uncaught Exception: ' + err.stack);
});

var serverPort = conf.get('PORT');

app.listen(serverPort, function() {
    console.log('Listening on ' + serverPort);
});

module.exports = app;