import React from 'react';

const MovieListEntry = (props) => {
  if (props.movie.watched) {
    return (
      <li className="movie-list-entry">
        <span onClick={props.toggleInfo}>{props.movie.title}</span><br/>
        <div className="movie-list-entry-info hidden" id={props.movie.title}>
          <span><b>Release Date:</b> {props.movie.movieData.release_date}</span><br/>
          <span><b>Average Score:</b> {props.movie.movieData.vote_average}</span><br/>
          <span><b>Popularity:</b> {props.movie.movieData.popularity}</span><br/>
          <button className="watched-button watched"  onClick={props.toggleWatched}>Watched</button>
        </div>
      </li>
    )
  } else {
    return (
      <li className="movie-list-entry">
        <span onClick={props.toggleInfo}>{props.movie.title}</span><br/>
        <div className="movie-list-entry-info hidden" id={props.movie.title}>
          <span><b>Release Date:</b> {props.movie.movieData.release_date}</span><br/>
          <span><b>Average Score:</b> {props.movie.movieData.vote_average}</span><br/>
          <span><b>Popularity:</b> {props.movie.movieData.popularity}</span><br/>
          <button className="watched-button"  onClick={props.toggleWatched}>Watched</button>
        </div>
      </li>
    )
  }
}

export default MovieListEntry;