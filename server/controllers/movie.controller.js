'use strict';

const db = require('../models/index.model');

module.exports.getMovies = async function (req, res) {
  const movieList = await db.Movie.find();
  res.json(movieList);
}