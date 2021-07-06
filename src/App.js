import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>

        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route
            exact
            path="/movies/:id/edit"
            component={ EditMovie }
            // render={ (props) => <EditMovie { ...props } /> }
          />
          <Route
            path="/movies/:id"
            component={ MovieDetails }
            // render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
