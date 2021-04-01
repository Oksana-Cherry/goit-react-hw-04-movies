import { Component } from 'react';
import ApiMovies from '../services/api-movies';
import GoBackButton from '../components/GoBackButton';
//import axios from 'axios';
/*const MovieDetailsPage = () => {
  return <h1>Это страница</h1>;
};
export default MovieDetailsPage;*/
//{this.props.match.params.movieId}
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

    return genres.map(({ name }) => name).join(' ');
  };

  handleGoBack = () => {
    const { history, location } = this.props;
    return history.push(location?.state?.from || '/');
  };
  render() {
    const {
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
    return (
      <div>
        <GoBackButton onClick={this.handleGoBack} /> {/*на предыдущий маршрут*/}
        <img src={poster_path} alt={title || name} width="200" />
        <div>
          <h1>
            {title || name} {Year}
          </h1>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{Genres}</p>
        </div>
        {/* 
        <ul>
          {this.state.movies.map(({ id, title, name }) => (
            <li key={id}>
              <NavLink exact to={`/movies/${id}`}>
                {title || name}
              </NavLink>
            </li>
          ))}
        </ul>*/}
      </div>
    );
  }
}
export default MovieDetailsPage;
