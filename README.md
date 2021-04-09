# Bad Movies

A practice tool designed to cover the fundamentals of fullstack application development

Learn the fundamentals of application structure and database integration by making a web app that renders the most horrible movies as listed on 'themoviedb.org' based on certain search criteria, namely genre. The user should be able to save a movie to their 'favorites' list and delete movies from this list.

### Basic functionality:

[ ] User should be able to search for the worst movies from any of the official genres listed on 'themoviedb.org'
  // https://developers.themoviedb.org/3/genres/get-movie-list
  // call to API for genres at app's start
    // cache it somewhere?

[ ] User should be given this official list of genres to select from and search with, filtering by selected genre
  // https://developers.themoviedb.org/3/discover/movie-discover
  // ideal: click into the desired genre to reveal ranked movie list

[ ] A search should find and display a limited list of movies sorted by rating in ascending order, showing the movies with the worst ratings first (figure out how to modify the API endpoint to do so)
  // ideal: show 10 movies ranked from worst to best rated.
  // need to modify endpoint for rank-based GET request

[ ] User should be able to click on any movie in order to save it to their favorites list (mySQL database, you must make your own Schema)
  // require DB schema to store favorited movies
  // clicked movie name gets added to favorited movies list

[ ] If a user has navigated to their favorites page, clicking on a movie should delete it from their favorites (unlike on the main page, where clicking on a movie adds it to their favorites list)
  // need a separate FAVORITES component that has access to favorite DB schema
  // click on movie name removes it from DB

[ ] Store your data in MySQL db (or MongoDB if/when you feel comfortable)

### The API for the application, where you will query for worst movies and all official genres:

https://developers.themoviedb.org/3/getting-started/introduction

--------

*To start the server and start webpack check out package.json*

Credits:
Peter Park
