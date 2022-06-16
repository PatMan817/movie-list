import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = (props) => {
  return (
    <div className="movie-list">
      <button onClick={props.swapActiveList}>Watched</button>
      <button onClick={props.swapActiveList}>To Watch</button>
      <ul className="movie-list-items">
        {props.activeList.map((movie) => (
          <MovieListEntry movie={movie} toggleWatched={props.toggleWatched}/>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;