module.exports.set = function(app, stylus, express) {

    function compile(str, path) {
      return stylus(str)
        .set('filename', path)
        .use(nib())
    }

    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));

    app.use(stylus.middleware(
      { src: __dirname + '/public', compile: compile }
    ));
    app.use(express.static(__dirname + '/public'));

}
