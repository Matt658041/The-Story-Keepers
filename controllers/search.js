const router = require('express').Router();
const books = require('google-books-search');
const  { getPosts } = require('./utils')

router.post('/', async (req, res, next) => {
    console.log('is this working? ')
    const searchQuery = req.body.search;
    console.log(searchQuery)
    try {

        const posts = await getPosts();

        books.search(searchQuery, function(error, results) {
            if (error) {
                next(error)
            } else {
                console.log(results)

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