import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = 'e548173527b69af98deb3da87ab1364c';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const getTrends = async () => {
  try {
    const { data } = await axios.get(`/3/trending/all/day`);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovie = async query => {
  try {
    const { data } = await axios.get(`/3/search/movie?query=${query}`);
    return data.results;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const getMovieDetails = async id => {
  try {
    const { data } = await axios.get(
      `/3/movie/${id}?append_to_response=credits,reviews`,
    );
    return data;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

const fetchMovies = { getTrends, getMovie, getMovieDetails };
export default fetchMovies;
