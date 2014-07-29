module.exports.set = function(mongoose) {

    mongoose.connect('mongodb://localhost/netflix_db');

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

    var Movie = mongoose.model('Movie', movieSchema)

    Movie.find(function (err, movies) {
      if (err) return console.error(err);
      console.log(movies);
    });

}
