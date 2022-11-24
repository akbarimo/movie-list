import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = ({movies}) => {
  console.log(movies)
  return (
    <div className="movie-list">
      {movies.map((movie, idx) => <MovieListEntry key={idx} movie={movie} />)}
    </div>
  );
};

export default MovieList;