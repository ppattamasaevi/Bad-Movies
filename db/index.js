const mongoose = require('mongoose');
const { CONNECTION_STRING } = require('../config/config.js');

// make connection to Atlas
module.exports.connection = mongoose.connect(CONNECTION_STRING);

// define Schema
const favoritesSchema = mongoose.Schema({
  tmdbid: Number,
  title: String
});

// compile Model using Schema
module.exports.Favorites = mongoose.model('Favorites', favoritesSchema);

