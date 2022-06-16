import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watchedMovies: [
        {title: 'Mean Girls',
      watched: true},
        {title: 'Sunshine',
      watched: true}
      ],
      unwatchedMovies: [
        {title: 'Hackers',
      watched: false},
        {title: 'The Grey',
      watched: false},
        {title: 'Ex Machina',
      watched: false}
      ],
      rerender: 0
    }

    this.activeList = this.state.watchedMovies;

    this.clickHandler = this.clickHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.swapActiveList = this.swapActiveList.bind(this);
  }

  addMovie() {
    var enteredValue = document.getElementById("addmoviebar").value;
    var newState = this.state;
    newState.unwatchedMovies.push({title: enteredValue, watched: false});
    this.setState(newState);
    document.getElementById("addmoviebar").value = '';
  }

  clickHandler(event) {
    console.log(event.target.innerText);
  }

  searchHandler() {
    var searchedValue = document.getElementById("searchbar").value;
    var movieResults = [];
    for (var movie of this.state.allMovies) {
      if ((movie.title.toLowerCase()).includes(searchedValue.toLowerCase())) {
        movieResults.push(movie);
      };
    }
    this.setState({movies: movieResults})
  }

  swapActiveList(event) {
    var clickedButton = event.target.innerText
    if (clickedButton === 'Watched') {
      this.activeList = this.state.watchedMovies;
    } else {
      this.activeList = this.state.unwatchedMovies;
    }
    this.setState({rerender: 0})
  }

  toggleWatched(event) {
    var clickedMovieName = event.target.parentNode.innerText;
    clickedMovieName = clickedMovieName.slice(0, clickedMovieName.length - 7)
    for (var i = 0; i < this.state.watchedMovies.length; i++) {
      if (this.state.watchedMovies[i].title === clickedMovieName) {
        var swappedMovie = this.state.watchedMovies.splice(i, 1)[0];
        swappedMovie.watched = false;
        this.state.unwatchedMovies.push(swappedMovie)
        this.setState({rerender: 0})
        return;
      }
    }
    for (var i = 0; i < this.state.unwatchedMovies.length; i++) {
      if (this.state.unwatchedMovies[i].title === clickedMovieName) {
        var swappedMovie = this.state.unwatchedMovies.splice(i, 1)[0];
        swappedMovie.watched = true;
        this.state.watchedMovies.push(swappedMovie)
        this.setState({rerender: 0})
        return;
      }
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Movie List</h1>
        </header>
        <div>
          <AddMovie addMovie={this.addMovie} clickHandler={this.clickHandler}/>
        </div>
        <nav>
          <Search clickHandler={this.clickHandler} searchHandler={this.searchHandler}/>
        </nav>
        <main>
          <MovieList swapActiveList={this.swapActiveList} activeList={this.activeList} toggleWatched={this.toggleWatched}/>
        </main>
      </div>
    )
  }
}

export default App;