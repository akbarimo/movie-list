const {getMovies, post, patch, extract} = require('./controllers/MoviesController.js');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/movies', getMovies);

router.post('/movies', post);

router.patch('/movies', patch);

router.delete('/movies', extract);

module.exports = router;