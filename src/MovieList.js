import { useContext } from "react";
import { movieList as MovieContext } from './context';
import Movie from './Movie';


function MovieList(props) {
  const movieList = useContext(MovieContext);

  const movies = movieList.map(movie =>
    <Movie movie={movie} key={movie._id}>{movie.title}</Movie>
  )

  return (
    <div>
      { movies }
    </div>
  )
}

export default MovieList;