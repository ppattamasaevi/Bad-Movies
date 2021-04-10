/// dependencies ///
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
/// helpers ///
const fetchGenres  = require('./api-helpers/fetchGenres.js');
const fetchMovies = require('./api-helpers/fetchMovies.js');
// PICK mySQL or MongoDB
const { saveOne, deleteOne, findAll } = require('../db//mysql/model.js');
// const { saveOne, deleteOne, findAll } = require('../db/model.js');


/// SERVER ///
const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(express.static('dist'))

/// API ROUTES ///
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
      res.sendStatus(500)
    })
});

/// MODEL ROUTES - MySQL ///

app.get('/movies/favs', (req, res) => {
  findAll()
    .then((result) => {
      console.log('>>>>Result from mySQL', result);
      res.send(result)
    })
    .catch((err) => {
      console.log('error retrieving favorites from server\n', err)
      res.sendStatus(500)
    })
});

app.post('/fav', (req, res) => {
  const params = [req.body.tmdbid, req.body.title];
  console.log('<<<PARAMS>>>>', params);
  saveOne(params)
    .then((result) => {
      res.status(201).send(result)
    })
    .catch((err) => {
      console.log('error saving movie to server\n', err)
      res.sendStatus(500)
    })
})

app.delete('/fav/del', (req, res) => {
  const params = [req.body.tmdbid];
  deleteOne(params)
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log('error deleting a favorite entry from server\n', err)
      res.sendStatus(500)
    })
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});


// /// MODEL ROUTES - MongoDB ///
// app.post('/fav', (req, res) => {
//   saveOne(req.body)
//     .then((result) => {
//       res.status(201).send(result)
//     })
//     .catch((err) => {
//       console.log('error saving movie to server\n', err)
//       res.sendStatus(500)
//     })
// })

// app.get('/movies/favs', (req, res) => {
//   findAll()
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log('error retrieving favorites from server\n', err)
//       res.sendStatus(500)
//     })
// });

// app.delete('/fav/del', (req, res) => {
//   deleteOne(req.body.tmdbid)
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log('error deleting a favorite entry from server\n', err)
//       res.sendStatus(500)
//     })
// });


// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`)
// });

