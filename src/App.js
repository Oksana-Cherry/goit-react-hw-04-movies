import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import routes from './routes';

import './styles/base.scss';

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route path={routes.home} exact component={HomePage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      {/*"/movies/:movieId"*/}
      <Route path={routes.movies} component={MoviesPage} /> {/*"/movies"*/}
      <Route component={NotFoundPage} />
      {/*<Redirect to="/" />*/}
    </Switch>
  </>
);

export default App;

/*  <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
*/
