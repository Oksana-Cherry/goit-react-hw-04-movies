import axios from 'axios';
/*import PropTypes from 'prop-types';

const URL = 'https://pixabay.com/api/';
const KEY = '19764594-1ff33c8737753e7bf91ee1679';
/*'https://pixabay.com/api/?key=19764594-1ff33c8737753e7bf91ee1679&image_type=photo&orientation=horizontal&per_page=12',*/

/*axios.defaults.baseURL = URL;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
const fetchImages = ({ searchQuery, page }) => {
  return axios
    .get('', {
      params: { searchQuery, page },
    })
    .then(response => response.data.hits);
};*/
/*fetchImages.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
export { fetchImages };*/
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

const ApiMovies = {
  fetchTrends,
  fetchMoviesSearch,
  fetchMovieDetails,
};

export default ApiMovies;
