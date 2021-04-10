const axios = require('axios');
const { API_KEY } = require('../../config/config.js');

const fetchMovies = (genreId) => {

  const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_original_language=en`;
  return axios.get(endpoint);

}

module.exports = fetchMovies;