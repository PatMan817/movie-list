import React from 'react';

const Search = (props) => {
  return (
    <div id="searchbar-div">
      <input id="searchbar" type="text"/>
      <button onClick={props.searchHandler}>Search</button>
    </div>
  )
}

export default Search;