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
      <div className="movie-details" data-testid="movie-details">
        <img className="img-details" alt="Movie Cover" src={ `../${imagePath}` } />
        <h2 className="title-details">{ `Título: ${title}` }</h2>
        <div className="details">
          <p>{ `Subtítulo: ${subtitle}` }</p>
          <p>{ `Sinopse: ${storyline}` }</p>
          <p>{ `Gênero: ${genre}` }</p>
          <p>{ `Avaliação: ${rating}` }</p>
        </div>
        <Link
          className="react-link link-details"
          to={ `/movies/${id}/edit` }
        >
          EDITAR
        </Link>
        <Link
          className="react-link link-details"
          to="/"
          onClick={ () => deleteMovie(id) }
        >
          DELETAR
        </Link>
        <Link
          className="react-link link-details"
          to="/"
        >
          VOLTAR
        </Link>
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
