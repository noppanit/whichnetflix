
var movies = [];

var tables = $('table');
tables.each(function(table_idx, table) {

    var theTable = $(table);
    theTable.find('tr').each(
        function(idx, item) {
            var movie = {};
            var item = $(item);

            var columns = item.find('td');
            var americanFlag = $(columns[0]).find('img').length !== 0 ? 'usa' : '';
            var britishFlag = $(columns[1]).find('img').length !== 0 ? 'uk' : '';

            var flags = [];
            if(americanFlag !== '') flags.push('us');
            if(britishFlag !== '') flags.push('uk');

            movie['flag'] = flags.join(',');

            var thirdColumn = $(columns[2]);
            var year = thirdColumn.find('b').clone();
            $('a', year).remove();

            var title = thirdColumn.find('b a');

            movie['title'] = title.html();
            movie['netflix_link'] = title.attr('href');
            movie['year'] = $.trim(year.html()).replace('(', '').replace(')','');

            movie['imdb_link'] = thirdColumn.find('i a').attr('href');
            movies.push(movie);
        }
    );

});

JSON.stringify(movies);
