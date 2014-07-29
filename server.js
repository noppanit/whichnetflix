var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    mongoose = require('mongoose'),
    controllers = require('./controllers'),
    config = require('./config.js'),
    mongodb = require('./lib/mongodb.js'),
    underscore = require('underscore'),
    q = require('q');

var app = express();
config.set(app, stylus, express, nib);

var movieFinder = new mongodb.set(mongoose, q, underscore)();

controllers.set(app, movieFinder);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
