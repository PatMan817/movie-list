import React from 'react';
import MovieListEntry from './MovieListEntry.jsx'

const MovieList = (props) => {
  return (
    <ol className="movie-list">
      {props.movies.map((movie) => (
        <MovieListEntry movie={movie} clickHandler={props.clickHandler}/>
      ))}
    </ol>
  );
};

export default MovieList;