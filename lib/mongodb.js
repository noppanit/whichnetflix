module.exports.set = function(mongoose, Q) {
    mongoose.connect('mongodb://localhost/netflix_db');

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
            var query = Movie.find({title: regex}, { 'title': 1 }).limit(20);

            query.exec(function(err, movies) {
              if (!err) {
                  deferred.resolve(movies);
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
