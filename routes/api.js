var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');

/*GET /api/movies */
router.get('/movies', moviesCtrl.index);

// POST /api/movies
router.post('/movies', moviesCtrl.create);

// GET /api/movies/1234
router.get('/movies', moviesCtrl.show)

// PUT /api/movies/1234

router.put('/movies/:id', moviesCtrl.update);

// DELETE /api/movies
router.delete('/movies/:id', moviesCtrl.delete);

module.exports = router;