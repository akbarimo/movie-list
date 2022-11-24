import React, { useState } from 'react';
import Search from './Search.jsx';
import Input from './Input.jsx';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';

const HomePage = ({movies, setMovies}) => {
  const [isEmpty, setIsEmpty] = useState(false);

  let timeout = null;
  const searchHandler = (e) => {
    // let query = e.target.value.toLowerCase();
    // clearTimeout(timeout);
    // timeout = setTimeout(() => {
    //   movies.requestData(query, (movies) => {
    //     if (movies.retrieve().length <= 0) {
    //       setIsEmpty(true);
    //     } else {
    //       setIsEmpty(false);
    //       setMovies(movies);
    //     }
    //   });
    // }, 0);
  };

  return (
    <div>
    <div>Search Bar</div>
    <div><Search searchHandler={searchHandler} /></div>
    <div><Input setMovies={setMovies} movies={movies} /></div>
    <div className="tab">
      <button className="tablinks" id="unwatched"onClick={(e) => tabHandler('unwatched', e)}>Unwatched</button>
      <button className="tablinks" id="watched" onClick={(e) => tabHandler('watched', e)}>Watched</button>
    </div>
    <div>Movie List</div>
    {isEmpty
      ? <div><span>No movie by that name found</span></div>
      : <div><MovieList movies={movies} /></div>
    }
  </div>
  );
};

export default HomePage;