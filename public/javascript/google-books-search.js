const books = require('google-books-search');

books.search('Enders game', function(error, results) {
    if ( ! error ) {
        console.log(results);
    } else {
        console.log(error);
    }
});


