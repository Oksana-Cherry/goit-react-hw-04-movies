import { React, Component } from 'react';
import ApiMovies from '../services/api-movies';
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
    console.log('genres: ', genres);
    return genres.map(({ name }) => name).join(' ');
  };
  render() {
    return (
      <div>
        <img src={this.state.poster_path} alt="" />
        <div>
          <h1>
            {this.state.title || this.state.name} ({this.getYear})
          </h1>
          <p>User Score: {this.getUserScore}%</p>
          <h3>Overview</h3>
          <p>{this.state.overview}</p>
          <h3>Genres</h3>
          <p>{this.getGenres}</p>
        </div>
        {/*   <img width={200} src={imgSrc} alt={title || name} />
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
