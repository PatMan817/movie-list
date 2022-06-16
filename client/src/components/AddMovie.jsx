import React from 'react';

var AddMovie = (props) => {
  return (
    <div>
      <input id="addmoviebar" placeholder="Enter Movie"/>
      <button id="addmoviebutton" onClick={props.addMovieData}>Add Movie</button>
    </div>
  )
}

export default AddMovie;