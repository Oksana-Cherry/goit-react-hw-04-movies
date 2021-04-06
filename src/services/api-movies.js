import axios from 'axios';
/*import PropTypes from 'prop-types';*/

const URL = 'https://api.themoviedb.org/3';
const KEY = '5c1478d6a3bf9fd13b0b345a28b0673d';
axios.defaults.baseURL = URL;
axios.defaults.params = {
  api_key: KEY,
};
const fetchTrends = async () => {
  const response = await axios.get('/trending/all/day');

  //   console.log(response.data.results);

  return response.data.results;
};

const fetchMoviesSearch = async query => {
  const response = await axios.get('/search/movie', {
    params: { query },
  });

  // console.log(response.data.results);

  return response.data.results;
};

const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);

  //console.log(response.data);

  return response.data;
};
const fetchCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);

  //console.log(response.data.cast);

  return response.data.cast;
};

const fetchReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);

  // console.log(response.data.results);

  return response.data.results;
};

const ApiMovies = {
  fetchTrends,
  fetchMoviesSearch,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
};

export default ApiMovies;
