const mysql = require('mysql2/promise');
const db = require('./index.js');

// need fns to handle getAll, post, delete

module.exports.findAll = () => {

  return db
    .then((connection) => {
      return connection.query('SELECT * from Favorites');
    })

}

module.exports.saveOne = (params) => {
  return db
    .then((connection) => {
      return connection.query(`INSERT INTO Favorites (tmdbid, title) VALUES (?, ?)`, params);
    })
}

module.exports.deleteOne = (params) => {
  return db
    .then((connection) => {
      return connection.query(`DELETE FROM Favorites WHERE tmdbid = ?`, params);
    });
}


/*
Favorites Schema:

const Favorites = `(
  id INT NOT NULL AUTO_INCREMENT,
  tmdbid TINYINT,
  title VARCHAR(50),
  PRIMARY KEY(id)
)`
*/