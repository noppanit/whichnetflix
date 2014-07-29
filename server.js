var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose'),
    controllers = require('./controllers'),
    config = require('./config.js'),
    mongodb = require('./lib/mongodb.js');

var app = express();

config.set(app, stylus, express);
controllers.set(app);
mongodb.set(mongoose);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
