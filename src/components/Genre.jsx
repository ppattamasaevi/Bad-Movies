import React from 'react';
import axios from 'axios';

class Genre extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      genres: []
    }

  }

  componentDidMount() {
    this.getGenres()
  }

  getGenres() {
    axios.get('/genres')
      .then(({data}) => {
        const fetchedGenres = data.genres;
        console.log(fetchedGenres)
        this.setState({
          genres: fetchedGenres
        });
      })
  }


  render() {
    return (
      <>
        <h3>Select from the following genres</h3>
        <ul>
          {this.state.genres.map((genre) => {
            return (
              <li
                key={genre.id}
                onClick={() => {this.props.handleGenreClick(genre.id)}}
                >{genre.name}
              </li>
            )
          })}
        </ul>
      </>
    )
  }

}

export default Genre;