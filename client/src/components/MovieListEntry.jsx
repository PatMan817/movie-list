import React from 'react';

const MovieListEntry = (props) => {
  if (props.movie.watched) {
    return (
      <li className="movie-list-entry">
        <span onClick={props.toggleInfo}>{props.movie.title}</span><br/>
        <div className="movie-list-entry-info hidden" id={props.movie.title}>
          <span><b>Runtime:</b> {props.movie.runtime}</span><br/>
          <span><b>MetaScore:</b> {props.movie.metaScore}</span><br/>
          <span><b>IMDb Rating:</b> {props.movie.imdbRating}</span><br/>
          <button className="watched-button watched"  onClick={props.toggleWatched}>Watched</button>
        </div>
      </li>
    )
  } else {
    return (
      <li className="movie-list-entry">
        <span onClick={props.toggleInfo}>{props.movie.title}</span><br/>
        <div className="movie-list-entry-info hidden" id={props.movie.title}>
          <span><b>Runtime:</b> {props.movie.runtime}</span><br/>
          <span><b>MetaScore:</b> {props.movie.metaScore}</span><br/>
          <span><b>IMDb Rating:</b> {props.movie.imdbRating}</span><br/>
          <button className="watched-button"  onClick={props.toggleWatched}>Watched</button>
        </div>
      </li>
    )
  }
}
/*class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watched: false
    }
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched(event) {
    var clickedMovieName = event.target.parentNode.innerText;
    clickedMovieName = clickedMovieName.slice(0, clickedMovieName.length - 7)
    console.log(clickedMovieName)
    if (this.state.watched) {
      this.state.watched = false
      event.target.style.backgroundColor = null;
    } else {
      this.state.watched = true;
      event.target.style.backgroundColor = 'greenyellow';
    }
  }

  render() {
    return (
      <li className="movie-list-entry">{this.props.movie.title}
        <button className="watched-button" onClick={this.toggleWatched}>Watched</button>
      </li>
    )
  }
}*/


export default MovieListEntry;