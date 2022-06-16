import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import getData from '../../lib/getData.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watchedMovies: [
        {title: 'Mean Girls',
        runtime: '100 min',
        metaScore: 70,
        imdbRating: 8,
        watched: true},

        {title: 'Sunshine',
        runtime: '90 min',
        metaScore: 75,
        imdbRating: 8.2,
        watched: true}
      ],
      unwatchedMovies: [
        {title: 'Hackers',
        runtime: '102 min',
        metaScore: 50,
        imdbRating: 6.5,
        watched: false},

        {title: 'The Grey',
        runtime: '120 min',
        metaScore: 60,
        imdbRating: 7,
        watched: false},

        {title: 'Ex Machina',
        runtime: '107 min',
        metaScore: 90,
        imdbRating: 9.4,
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
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  addMovie() {
    var enteredValue = document.getElementById("addmoviebar").value;
    var newState = this.state;
    newState.unwatchedMovies.push({title: enteredValue, watched: false});
    this.setState(newState);
    document.getElementById("addmoviebar").value = '';
  }

  clickHandler(event) {
    console.log(event.target);
  }

  //componentDidMount() {
  //  this.searchMovieData('test')
  //}
//
  //searchMovieData(query) {
  //  getData(query, (movieData) => {
  //    this.setState({movies: movieData})
  //  });
  //}

  searchHandler() {
    var searchedValue = document.getElementById("searchbar").value;
    var movieResults = [];
    for (var movie of this.activeList) {
      if ((movie.title.toLowerCase()).includes(searchedValue.toLowerCase())) {
        movieResults.push(movie);
      };
    }
    this.activeList = movieResults
    this.setState({rerender: 0})
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

  toggleInfo(event) {
    var targetDiv = document.getElementById(event.target.innerText);
    if (targetDiv.classList.contains('hidden')) {
      targetDiv.classList.remove('hidden')
    } else {
      targetDiv.classList.add('hidden')
    }
  }

  toggleWatched(event) {
    var clickedMovieName = event.target.parentNode.id;
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
    console.log(this.getData)
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
          <MovieList swapActiveList={this.swapActiveList} activeList={this.activeList} toggleWatched={this.toggleWatched} toggleInfo={this.toggleInfo}/>
        </main>
      </div>
    )
  }
}

export default App;