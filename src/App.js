import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './MovieList'

import * as apiClient from './apiClient';

import { myMovieList as MyMovieContext } from './context';

function App() {
  const [movies, setMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    apiClient.getMovies().then(movieList => setMovies(movieList));
  }, []);

  function updateMyMovieList(movie) {
    if (myMovies.includes(movie)) {
      const index = myMovies.indexOf(movie);
      const newMyMovies = myMovies.slice();
      newMyMovies.splice(index, 1);
      setMyMovies(newMyMovies);
    } else {
      setMyMovies([...myMovies, movie]);
    }
  }

  const myMovieObj = {
    updater: (movie) => updateMyMovieList(movie),
    stateVar: myMovies
  }


  const myMoviesList = myMovies.length > 0 ?
    (<div>
      <h1>My Movies</h1>
      <MyMovieContext.Provider value={myMovieObj}>
        <MovieList movies={myMovies}/>
      </MyMovieContext.Provider>
    </div>
    ) : null;

  return (
    <div>
      {myMoviesList}
      <h1>Discover</h1>
      <MyMovieContext.Provider value={myMovieObj}>
        <MovieList movies={movies} />
      </MyMovieContext.Provider>
    </div>
  );
}

export default App;
