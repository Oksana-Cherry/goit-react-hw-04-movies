import { Component } from 'react';
//import axios from 'axios';
//import { NavLink } from 'react-router-dom';
import ApiMovies from '../services/api-movies';
import MoviesList from '../components/MoviesList';
/* шаг--1й
const HomePage = () => {
  return <h1>Это домашняя страница</h1>;
};
export default HomePage;*/
//const URL = 'https://api.themoviedb.org/3';
//const KEY = '5c1478d6a3bf9fd13b0b345a28b0673d';
class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };

  /*async componentDidMount() {
    const response = await axios.get(`
${URL}/trending/all/day?api_key=${KEY}`);
    //console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }*/
  componentDidMount() {
    ApiMovies.fetchTrends()
      .then(trends => this.setState({ movies: trends }))
      .catch(error => this.setState({ error }));
  }
  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {/* <ul>
          {this.state.movies.map(({ id, title, name }) => (
            <li key={id}>
              <NavLink exact to={`/movies/${id}`}>
                {title || name}
              </NavLink>
            </li>
          ))}
        </ul>*/}
        <MoviesList movies={movies} />
      </>
    );
  }
}
export default HomePage;
