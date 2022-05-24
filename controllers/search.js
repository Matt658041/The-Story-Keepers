const router = require('express').Router();
const books = require('google-books-search');
const  { getPosts } = require('./utils')

router.get('/', async (req, res, next) => {
    try {
        const searchQuery = req.body.search;

        const posts = await getPosts();

        books.search(searchQuery, function(error, results) {
            if ( ! error ) {
                next(err)
            } else {


                res.render('homepage', {
                    searchResults: results,
                    posts,
                    loggedIn: req.session.loggedIn
                  });
            }
        });

    } catch (err) {
        next(err)
    }
})
module.exports = router;