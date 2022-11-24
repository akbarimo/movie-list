import React from 'react';
import Data from './Data.js'

const Input = ({setMovies, movies}) => {
  const [input, setInput] = React.useState('');
  return (
    <div className="input-bar">
      <form onSubmit={(e) => {
        e.preventDefault();
        if (input.length > 0) {
          movies.updateData([{title: input, source: 'added'}]);
          setMovies(Object.create(movies));
        }
        setInput('');
      }}>
        <input id="input" type="text" name="movie" value={input} onChange={(e) => setInput(e.target.value)} />
        <input type="submit" value="Submit" disabled={!input.length} />
      </form>
    </div>
  );
};

export default Input;