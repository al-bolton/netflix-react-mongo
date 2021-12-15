'use strict';

const { Router } = require('express');
const router = Router();

const movieController = require('./controllers/movie.controller');

router.get('/', function (req, res) {
  console.log('Got a get request')
  res.send('Howdy')
  res.status = 200;
})

router.get('/movies', movieController.getMovies)

module.exports = router;