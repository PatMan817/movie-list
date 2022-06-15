import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = (props) => {
  return (
    <ul className="movie-list">
      {props.movies.map((movie) => (
        <MovieListEntry movie={movie} clickHandler={props.clickHandler}/>
      ))}
    </ul>
  );
};

export default MovieList;