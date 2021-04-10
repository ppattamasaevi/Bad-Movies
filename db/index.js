const mongoose = require('mongoose');
const { CONNECTION_STRING } = require('../config/config.js');

// make connection to Atlas
mongoose.connect(CONNECTION_STRING);

// define Schema
const favoritesSchema = mongoose.Schema({
  tmdbid: Number,
  title: String
});

// compile Model using Schema
let Favorites = mongoose.model('Favorites', favoritesSchema);


module.exports.save = (movie) => {
  console.log('>>>>> DB attempting to SAVE this movie to the Favorites collection: ', movie);
  return Favorites.findOneAndUpdate(
    {tmdbid: movie.id},
    movie,
    {
      new: true,
      upsert: true
    }
  )
}

module.exports.delete = (movie) => {
  console.log('>>>>> DB attempting to DELETE this movie to the Favorites collection: ', movie);
  return Favorites.deleteOne({tmdbid: movie.tmdbid});
}

/*
let doc = await Character.findOneAndUpdate(filter, update, {
  new: true,
  upsert: true // Make this update into an upsert
});
*/