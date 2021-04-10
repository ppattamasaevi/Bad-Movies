const mysql = require('mysql2/promise');
const {MYSQL_KEY} = require('../../config/config.js');

// define schema
const Favorites = `(
  id INT NOT NULL AUTO_INCREMENT,
  tmdbid INT,
  title VARCHAR(100),
  PRIMARY KEY(id)
)`

const dbName = 'BadMovies';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: MYSQL_KEY
})

db
  .then((connection) => {
    console.log('///DB connected///');
    return connection;
  })
  .catch((err) => {
    console.log('///Error connecting to DB///', err);
  })
  .then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    return connection;
  })
  .then((connection) => {
    connection.query(`USE ${dbName}`);
    return connection;
  })
  .then((connection) => {
    connection.query(`CREATE TABLE IF NOT EXISTS Favorites ${Favorites}`);
    return connection;
  })
  .catch((err) => {
    console.log('Error initializing DB: ', err)
  })

module.exports = db;