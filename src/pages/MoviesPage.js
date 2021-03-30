import { React, Component } from 'react';

//import axios from 'axios';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';
import ApiMovies from '../services/api-movies';
/*шаг-1й
const MoviesPage = () => {
  return <h1>Это страница</h1>;
};
export default MoviesPage;*/
/*шаг-2* const URL = 'https://api.themoviedb.org/3';
const KEY = '5c1478d6a3bf9fd13b0b345a28b0673d';*/

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  };
  /*шаг-2
  async componentDidMount() {
    const response = await axios.get(`
${URL}/trending/all/day?${KEY}`);
    //console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }*/

  onChangeQuery = query => {
    ApiMovies.fetchMoviesSearch(query)
      .then(movies => this.setState({ movies }))
      .catch(error => this.setState({ error }));
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MoviesList movies={movies} />
      </>
    );
  }
}
export default MoviesPage;
