const axios = require('axios');
const { API_KEY } = require('../../config/config.js');

const fetchGenres = () => {
  const endpoint = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  return axios.get(endpoint);

}

module.exports = fetchGenres;