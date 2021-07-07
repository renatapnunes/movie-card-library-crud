import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getMovie, deleteMovie } from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { props: { match: { params: { id } } } } = this;
    const responseGetMovie = await getMovie(id);
    this.assingResponse(responseGetMovie);
  }

  assingResponse(responseGetMovie) {
    this.setState({
      movie: responseGetMovie,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) return <Loading />;

    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h2>{ `Título: ${title}` }</h2>
        <p>{ `Subtítulo: ${subtitle}` }</p>
        <p>{ `Sinopse: ${storyline}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliação: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/" onClick={ () => deleteMovie(id) }>DELETAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default MovieDetails;
