import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ApiMovies from '../services/api-movies';
import GoBackButton from '../components/GoBackButton';
import Details from '../components/Details';
import routes from '../routes';
import defaultImage from '../image/default.jpg';

//import Cast from '../components/Cast';
//import Reviews from '../components/Reviews';

const Cast = lazy(() =>
  import('../components/Cast/' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews/' /* webpackChunkName: "reviews" */),
);
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
    return history.push(location?.state?.from || routes.home);
  };
  render() {
    const { match } = this.props;
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
      <>
        <GoBackButton onClick={this.handleGoBack} /> {/*на предыдущий маршрут*/}
        <Details
          imageUrl={imageUrl}
          name={name}
          title={title}
          userScore={userScore}
          overview={overview}
          Year={Year}
          Genres={Genres}
        />
        <section className="add_section ">
          <h2>Additional information</h2>
          <ul className="">
            <li className="add_section_item">
              <NavLink
                to={{ pathname: `/movies/${id}/cast` }}
                className="navLink"
                activeClassName="navLink__active"
              >
                Cast
              </NavLink>
            </li>
            <li className="add_section_item">
              <NavLink
                to={{ pathname: `/movies/${id}/reviews` }}
                className="navLink"
                activeClassName="navLink__active"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Suspense fallback={<div>Загрузка...</div>}>*/}
          <Route path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Suspense>
      </>
    );
  }
}
export default MovieDetailsPage;
