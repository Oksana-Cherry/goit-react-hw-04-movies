import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import ApiMovies from '../services/api-movies';
import GoBackButton from '../components/GoBackButton';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

import defaultImage from '../image/default.jpg';
//import axios from 'axios';
/*const MovieDetailsPage = () => {
  return <h1>Это страница</h1>;
};
export default MovieDetailsPage;*/
//{this.props.match.params.movieId}
const IMAGE = 'https://image.tmdb.org/t/p/w342';
class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    name: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
    error: null,
  };

  /* async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`
movie/${movieId}`);
    console.log(response.data);
    // this.setState({ movie: response.data.results });
    this.setState({ ...response.data });
  }*/
  componentDidMount() {
    const { movieId } = this.props.match.params;

    ApiMovies.fetchMovieDetails(movieId)
      .then(movie => this.setState({ ...movie }))
      .catch(error => this.setState({ error }));
  }

  getYear = () => {
    const { release_date } = this.state;

    return release_date.split('-')[0];
  };

  getUserScore = () => {
    const { vote_average } = this.state;

    return vote_average * 10;
  };

  getGenres = () => {
    const { genres } = this.state;

    return genres.map(({ name }) => name).join(', ');
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    return history.push(location?.state?.from || '/');
  };
  render() {
    const {
      id,
      name,
      title,
      overview,
      poster_path,
      release_date,
      vote_average,
      genres,
    } = this.state;

    const Year = release_date ? this.getYear() : null;
    const Genres = genres ? this.getGenres() : null;
    const userScore = vote_average ? this.getUserScore() : null;
    const imageUrl = poster_path ? IMAGE + poster_path : defaultImage;

    return (
      <div>
        <GoBackButton onClick={this.handleGoBack} /> {/*на предыдущий маршрут*/}
        <img src={imageUrl} alt={title || name} width="200" />
        <div>
          <h1>
            {title || name} {Year}
          </h1>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{Genres}.</p>
        </div>
        <section>
          <h2>Additional information</h2>
          <NavLink to={{ pathname: `/movies/${id}/cast` }}>Cast</NavLink>
          <NavLink to={{ pathname: `/movies/${id}/reviews` }}>Reviews</NavLink>
        </section>
        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </div>
    );
  }
}
export default MovieDetailsPage;
