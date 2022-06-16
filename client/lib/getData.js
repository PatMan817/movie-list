import $ from 'jquery';
import {MOVIE_API_KEY, MOVIE_API_REQUEST_LINK} from '../config/config.js';

//$.ajaxPrefilter(function (settings, _, jqXHR) {
//  jqXHR.setRequestHeader('Authorization', MOVIE_API_KEY);
//});

var getData = (query, callback) => {
  $.get(`https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`, function(data) {
    callback(data.results[0])
  });
};

export default getData;