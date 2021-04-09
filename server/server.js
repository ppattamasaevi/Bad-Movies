/// dependencies ///
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
/// helpers ///
const fetchGenres  = require('./helpers/fetchGenres.js');
const fetchMovies = require('./helpers/fetchMovies.js');

/// SERVER ///
const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(express.static('dist'))

app.get('/genres', (req, res) => { // API call fetch genres
  fetchGenres()
    .then(({data}) => {
      console.log(data);
      res.send(data); // sends back array of genres objects
    })
    .catch((err) => {
      console.log('error fetching genres from API\n', err)
    })
});

app.get('/movies', (req, res) => {
  fetchMovies(req.query.genreId)
    .then(({data}) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('error fetching movies by genre from API\n', err)
    })
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});


// `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEy}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_original_language=en`