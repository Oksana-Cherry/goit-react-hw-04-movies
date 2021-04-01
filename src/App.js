import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/base.scss';

const App = () => (
  <div>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="navLink"
          activeClassName="navLink__active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="navLink"
          activeClassName="navLink__active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route component={NotFoundPage} />
      {/*<Redirect to="/" />*/}
    </Switch>
  </div>
);

export default App;

/*  <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
*/
