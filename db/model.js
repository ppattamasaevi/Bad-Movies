const { connection } = require('./index.js');
const { Favorites } = require('./index.js');


module.exports.saveOne = (movie) => {
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

module.exports.deleteOne = (movieId) => {
  console.log('>>>>> DB attempting to DELETE this movieId from Favorites collection: ', movieId);
  return Favorites.deleteOne({tmdbid: movieId});
}

module.exports.findAll = () => {
  console.log('>>>>> RETRIEVING ALL documents from DB');
  return Favorites.find({});
}

/*
let doc = await Character.findOneAndUpdate(filter, update, {
  new: true,
  upsert: true // Make this update into an upsert
});
*/