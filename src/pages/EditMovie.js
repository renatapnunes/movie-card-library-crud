import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loading from '../components/Loading';
import { MovieForm } from '../components';
import { getMovie, updateMovie } from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { props: { match: { params: { id } } } } = this;
    const responseGetMovie = await getMovie(id);
    this.assingResponse(responseGetMovie);
  }

  async handleSubmit(updatedMovie) {
    const responseUpdateMovie = await updateMovie(updatedMovie);
    this.setState({
      movie: responseUpdateMovie,
      shouldRedirect: true,
    });
  }

  assingResponse(responseGetMovie) {
    this.setState({
      movie: responseGetMovie,
      status: 'loaded',
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) return <Redirect to="/" />;

    if (status === 'loading') return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default EditMovie;
