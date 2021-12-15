import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './MovieList'

import * as apiClient from './apiClient';

import { movieList as MovieContext } from './context';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    apiClient.getMovies().then(movieList => setMovies(movieList));
  }, []);

  return (
    <div>
      <h1>Discover</h1>
      <MovieContext.Provider value={movies}>
        <MovieList />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
