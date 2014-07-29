module.exports.set = function(app, movieFinder) {
   app.get('/', function(req, res){
     res.render('index', { title : 'Which netflix?' } );
   });

   app.get('/search', function(req, res) {
       var query = req.query.q;
       var promisedMovies = movieFinder.findByTitle(query);

       promisedMovies.done(function(movies) {
           res.setHeader('Content-Type', 'application/json');
           res.end(JSON.stringify(movies));
       });

   });
}
