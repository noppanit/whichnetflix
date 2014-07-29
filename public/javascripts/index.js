
var movies = ko.observableArray([]);

var MovieModel = function() {
    return {
        movies : movies
    };
};

var query = $('#q').asEventStream('keyup').throttle(200).map(function(event) {
    return $(event.target).val();
}).toProperty('');

queryRequests = query.changes().map(function(query) {
    return { url: "/search?q=" + query }
});

queryRequests.flatMapLatest(function(request) {
    return Bacon.fromPromise($.ajax({
            url : request.url,
            method : 'GET',
            dataType : 'json'
        }
    ));
}).onValue(function(returnedMovies) {
    movies([]);
    movies(_.flatten(returnedMovies));
});


ko.applyBindings(new MovieModel());
