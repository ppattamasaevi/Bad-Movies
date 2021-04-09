import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Genre from './components/Genre';
import Movies from './components/Movies';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
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

  render() {
    return (
      <>
        <Genre handleGenreClick={this.handleGenreClick}/>
        <Movies movies={this.state.movies}/>
      </>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));