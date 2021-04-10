import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Genre from './components/Genre';
import Movies from './components/Movies';
import Favorites from './components/Favorites';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      inFavorite: false,
      favoritesCount: 0
    }
    this.handleGenreClick = this.handleGenreClick.bind(this);
  }

  handleGenreClick(genreId) {

    axios.get('/movies', {
      params: {
        genreId: genreId
      }
    })
    .then(({data}) => {
      const allMovies = data.results;
      this.setState({
        movies: allMovies
      });
      console.log(this.state.movies)

    })

    // make api call to fetch data for movies in that genre, ranked worst to best
      // then update movies state
      // list of movies gets passed to movies component for re-rendering
  }

  incrementFav() {
    this.setState({
      favoritesCount: this.state.favoritesCount + 1
    });
  }

  decrementFav() {
    this.setState({
      favoritesCount: this.state.favoritesCount - 1
    });
  }

  navToFav() {
    this.setState({
      inFavorite: true
    });
  }

  render() {
    if (this.state.inFavorite === false) {
      return (
        <>
          <Genre handleGenreClick={this.handleGenreClick}/>
          <button onClick={this.navToFav.bind(this)}>My Favorites</button>
          <Movies movies={this.state.movies} incrementFav={this.incrementFav.bind(this)}/>
        </>
      )
    } else {
      return (
        <>
          <Favorites />
        </>
      )
    }
  }

}

ReactDOM.render(<App />, document.getElementById('app'));