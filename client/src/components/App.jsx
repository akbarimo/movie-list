import React, { useState } from 'react';
import HomePage from './HomePage.jsx';
import Loading from './Loading.jsx';
import Data from './Data.js';
import initialize from './initialize.js';
import axios from 'axios';

const App = () => {

  const [movies, setMovies] = useState();

  const getMovies = (callback) => {
    axios.get('/movies')
    .then((response) => callback(response.data))
    .catch((err) => new Error(err));
  };

  const postMovie = (movie) => {
    axios.post('/movies', movie)
    .then((response) => console.log(response))
    .catch((err) => new Error(err));
  }

  if (!movies) getMovies(setMovies);

  return (
  <div>
    <div>

    </div>
    {movies
      ? <HomePage setMovies={setMovies} movies={movies} />
      : <div></div>
    }
  </div>
  );
};

export default App;