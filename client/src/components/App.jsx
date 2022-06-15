import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie() {
    var enteredValue = document.getElementById("addmoviebar").value;
    var newState = this.state;
    newState.movies.push({title: enteredValue});
    this.setState(newState);
    document.getElementById("addmoviebar").value = '';
  }

  clickHandler(event) {
    console.log(event.target);
  }

  searchHandler() {
    var searchedValue = document.getElementById("searchbar").value;
    var movieResults = [];
    for (var movie of this.state.movies) {
      if ((movie.title.toLowerCase()).includes(searchedValue.toLowerCase())) {
        movieResults.push(movie);
      };
    }
    this.setState({movies: movieResults})
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
          <MovieList movies={this.state.movies} clickHandler={this.clickHandler}/>
        </main>
      </div>
    )
  }
}

export default App;