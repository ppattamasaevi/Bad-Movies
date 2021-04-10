import React from 'react';
import axios from 'axios';

class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  handleFavoriting(movieId, movieTitle) {
    console.log(`-- Adding "${movieTitle}" to user's favorites list --`);
    const movie = {
      tmdbid: movieId,
      title: movieTitle
    };
    axios.post('/fav', movie)
      .then((data) => {
        console.log(`-- Movie added to the Favorites list: "${data.config.data}" --`);
        this.props.incrementFav();
      })
      .catch((err) => {
        console.log('Err from server after attempting to post to DB:', err);
      })
  }

  render() {
    const movies = this.props.movies;
    if (movies.length > 0) {
      return (
        <>
          <h3>Movies so bad, they're good:</h3>
          <ol>
            {movies.map((movie) => {
              return (
                <li onClick={() => {this.handleFavoriting(movie.id, movie.original_title)}} key={movie.id}>
                  <h5>{movie.original_title}</h5>
                  <p><em>Released: {movie.release_date}</em></p>
                  <p>{movie.overview}</p>
                </li>
              )
            })}
          </ol>
        </>
      )
    } else {
      return (
        <>

        </>
      )
    }
  }

}

export default Movies;

/*
adult: false
backdrop_path: null
genre_ids: [18]
id: 816654
original_language: "en"
original_title: "Greta"
overview: "A personal, subjective journey into the mind of Greta Thunberg, before realizing her calling as a climate activist. While struggling with mental health issues and bullying because of her Aspergers, she also grapples with the sense of impending doom due to the climate crisis. These same struggles and fears drive her to make change and become the person she is today."
popularity: 0
poster_path: null
release_date: "2021-04-09"
title: "Greta"
video: false
vote_average: 0
vote_count: 0
__proto__: Object
*/