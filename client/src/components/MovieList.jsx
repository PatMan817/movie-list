import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = (props) => {
  return (
    <div className="movie-list">
      <button id='watched-list-button' onClick={props.swapActiveList}>Watched</button>
      <button id='to-watch-button' className='watched' onClick={props.swapActiveList}>To Watch</button>
      <ul className="movie-list-items">
        {props.activeList.map((movie) => (
          <MovieListEntry movie={movie} toggleWatched={props.toggleWatched} toggleInfo={props.toggleInfo}/>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;