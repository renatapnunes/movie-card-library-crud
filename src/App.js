import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <h1>Movie Card Library</h1>
        </header>

        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route component={ NotFound } />
        </Switch>

        <footer>
          <p>Projeto Movie Cards Library CRUD - Curso de Desenvolvimento Web - Trybe </p>
          <p>
            Feito por
            <a className="link" href="https://www.linkedin.com/in/renata-p-nunes/" target="blank"> Renata Nunes </a>
            com React e amor!
          </p>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
