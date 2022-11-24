import React from 'react';

const MovieListEntry = ({movie}) => {

  const watchHandler = (movie, property) => {
    movie[property] = !movie[property];
    console.log(movie);
  }

  return (
    <div>
      <div className="list-movie">{movie.moviename}</div>
      <button movie={movie.moviename} onClick={() => {
        watchHandler(movie, 'watched');
      }}>
        {movie['watched'] === true ? 'Watched' : 'To Watch'}
      </button>
    </div>
  );
}

export default MovieListEntry;