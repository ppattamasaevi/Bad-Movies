import React from 'react';
import axios from 'axios';

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favMovies: []
    }
  }

  componentDidMount() {
    this.fetchFavorites();
  }

  fetchFavorites() {
    axios.get('/movies/favs')
      .then(({data}) => {
        console.log('data from server', data[0]);
        this.setState({
          favMovies: data[0]
        });
      })
      .catch((err) => {
        console.log('error from server while fetching favorites', err);
      })
  }

  handleRemove(movieId) {
    axios.delete('/fav/del', {
      data: {
        tmdbid: movieId
      }
    })
      .then(() => {
        this.fetchFavorites();
      })
      .catch((err) => {
        console.log('error from server while delete a favorite entry', err);
      })
  }

  render() {
    const favMovies = this.state.favMovies;
    return (
      <>
        <h3>Your Favorites</h3>
        <p><em>Click to remove from list</em></p>
          <ol>
            {favMovies.map((movie) => {
              return (
                <li onClick={() => {this.handleRemove(movie.tmdbid)}} key={movie.tmdbid}>{movie.title}</li>
              )
            })}
          </ol>
      </>
    )
  }
}

export default Favorites;