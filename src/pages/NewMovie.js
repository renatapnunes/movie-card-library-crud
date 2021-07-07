import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import { createMovie } from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createdMovie: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(newMovie) {
    await createMovie(newMovie);
    this.setState({
      createdMovie: true,
    });
  }

  render() {
    const { createdMovie } = this.state;

    if (createdMovie) return <Redirect to="/" />;

    return (
      <div data-testid="new-movie">
        <p>Renderizando NewMovie</p>
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
