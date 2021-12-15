import { useContext } from 'react';
import { myMovieList as MyMovieContext } from './context';
import './Movie.css'

function Movie(props) {
  const imgPath = 'https://image.tmdb.org/t/p/w300/' + props.movie.poster_path;

  const addMovieToList = useContext(MyMovieContext).updater;

  const movieCheck = useContext(MyMovieContext).stateVar.includes(props.movie);

  const button = movieCheck ?
    (
      <svg height="40" viewBox="0 0 25 25" width="40" xmlns="http://www.w3.org/2000/svg" onClick={() => addMovieToList(props.movie)}><g fill="none"><circle cx="12.5" cy="12.5" r="11.5" stroke="#fff" /><g stroke="#e0e0e0" transform="translate(7 6)"><path d="m.93453544 6.00041853 3.62618582 5.59960937" /><path d="m9.63738142 1.20075335-5.07666016 10.39927455" /></g></g></svg>
    ) :
    (
      <svg height="40" viewBox="0 0 25 25" width="40" xmlns="http://www.w3.org/2000/svg" onClick={() => addMovieToList(props.movie)}><g fill="none" transform="translate(1 1)"><circle cx="11.5" cy="11.5" r="11.5" stroke="#fff" /><g stroke="#e0e0e0"><path d="m11.5 6.5v10" /><path d="m16.5 11.5h-10" /></g></g></svg>
    );

  return (
    <div className="movie-poster">
      <img src={imgPath} alt={'Movie poster for ' + props.movie.title}></img>
      {button}
    </div>
  )
}

export default Movie;