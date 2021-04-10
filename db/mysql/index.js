const mysql = require('mysql2/promise');
const {MYSQL_KEY} = require('../../config/config.js');

// define schema
const Favorites = `(
  id INT NOT NULL AUTO_INCREMENT,
  tmdbid TINYINT,
  title VARCHAR(50),
  PRIMARY KEY(id)
)`

const dbName = 'BadMovies';

module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: MYSQL_KEY
})
  .then((conn) => {
    console.log('///DB Connected///');
    return conn;
  })
  .catch((err) => {
    console.log('///Error connecting to DB///', err);
  })
  .then((conn) => {
    conn.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    return conn;
  })
  .then((conn) => {
    conn.query(`USE ${dbName}`);
    return conn;
  })
  .then((conn) => {
    conn.query(`CREATE TABLE IF NOT EXISTS Favorites ${Favorites}`);
  })
  .catch((err) => {
    console.log('Error initializing DB: ', err)
  })