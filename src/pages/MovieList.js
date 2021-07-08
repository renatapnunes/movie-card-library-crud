import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await getMovies();
      this.assingResponse(response);
    } catch (error) {
      console.log(error);
    }
  }

  assingResponse(response) {
    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading) return <Loading />;

    return (
      <div className="movies">
        <div className="div-links">
          <Link className="react-link" to="movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div className="movie-list" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
