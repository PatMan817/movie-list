import React from 'react';

const MovieListEntry = (props) => {
  return (
    <li className="movie-list-entry" onClick={props.clickHandler}>{props.movie.title}</li>
  )
}

export default MovieListEntry;