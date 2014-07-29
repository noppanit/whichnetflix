module.exports.set = function(mongoose, Q, _) {

    var mongouri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/netflix_db';
    mongoose.connect(mongouri);

    var MovieFinder = function() {

        var movieSchema = mongoose.Schema({
            flag: String,
            title: String,
            netflix_link: String,
            imdb_link: String
        },
        {
            collection : 'netflix'
        }
        );

        var Movie = mongoose.model('Movie', movieSchema);

        var findByTitle = function(title) {
            var deferred = Q.defer()

            var regex = new RegExp(title, 'i');
            var query = Movie.find({title: regex}).limit(20);

            query.exec(function(err, movies) {
              if (!err) {
                  new_movies = _.map(movies, function(movie) {
                    var flags = [];
                     _.each(movie.flag.split(','), function(country) {
                         flags.push({ 'url' : '/images/' + country + '.png' });
                     });

                    return {
                        'title' : movie.title,
                        'netflix' : movie.netflix_link,
                        'flags' : flags
                    };

                  });

                  deferred.resolve(new_movies);
              } else {
                  deferred.reject(err);
              }
           });

           return deferred.promise;

        };

        return {
            findByTitle : findByTitle
        };
    };

    return MovieFinder;

}
