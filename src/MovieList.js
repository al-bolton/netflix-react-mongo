import Movie from './Movie';
import './MovieList.css'


function MovieList(props) {
  const movies = props.movies.map(movie =>
    <Movie movie={movie} key={movie._id}></Movie>
  )

  return (
    <div className="movie-list">
      { movies }
    </div>
  )
}

export default MovieList;