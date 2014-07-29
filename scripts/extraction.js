
var movies = [];

var tables = $('table');
tables.each(function(table_idx, table) {

    var theTable = $(table);
    theTable.find('tr').each(
        function(idx, item) {
            var movie = {};
            var item = $(item);
            movie['flag'] = $(item.find('td img')[0]).attr('src') === 'http://bit.ly/VwOStb' ? 'uk' : 'usa';
            movie['title'] = $(item.find('td')[2]).find('b a').html();
            movie['netflix_link'] = $(item.find('td')[2]).find('b a').attr('href');
            movie['imdb_link'] = $(item.find('td')[2]).find('i a').attr('href');
            movies.push(movie);
        }
    );

});

JSON.stringify(movies);
        
