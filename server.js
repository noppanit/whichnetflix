var express = require('express'),
    stylus = require('stylus'),
    nib = require('nib'),
    mongoose = require('mongoose'),
    controllers = require('./controllers'),
    config = require('./config.js'),
    mongodb = require('./lib/mongodb.js'),
    baconjs = require('baconjs'),
    q = require('q'),
    jquery = require('jquery');

var app = express();
config.set(app, stylus, express, nib);

var movieFinder = new mongodb.set(mongoose, q)();

controllers.set(app, movieFinder);

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
