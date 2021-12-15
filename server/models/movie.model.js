'use strict';

module.exports = (mongoose) => {
  const movieSchema = new mongoose.Schema({
    _id: String,
    title: String,
    poster_path: String
  });

  const Movie = mongoose.model('Movie', movieSchema);

  return Movie;
}