import React from 'react';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watched: false
    }
    this.toggleWatched = this.toggleWatched.bind(this);
  }

  toggleWatched(event) {
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
}


export default MovieListEntry;