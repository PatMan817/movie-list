import React from 'react';
import MovieList from './MovieList.jsx'

//const App = (props) => (
//  <div>Hello World!</div>
//);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    }
  }

  clickHandler(event) {
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Movie List</h1>
        </header>
        <main>
          <MovieList movies={this.state.movies} clickHandler={this.clickHandler.bind(this)}/>
        </main>
      </div>
    )
  }
}

export default App;