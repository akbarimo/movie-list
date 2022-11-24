import React from 'react';

const Search = ({searchHandler}) => {
  return (
  <div className="search-bar">
    <input onChange={searchHandler} className="search-text" type="text"></input>
  </div>
  );
}

export default Search;