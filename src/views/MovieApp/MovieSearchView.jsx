import { useState, useEffect } from 'react';
import SearchList from '../../components/MovieComponents/SearchList';
import SearchForm from '../../components/MovieComponents/SearchForm';
import queryString from 'query-string';
import api from '../../api/movieAPI';
import PropTypes from 'prop-types';
import s from './MovieStyles.module.scss';

const MovieSearchView = ({ location, match }) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(
    queryString.parse(location.search).query || '',
  );

  const handleMovieSearch = text => {
    setQuery(text);
    getMovie(text);
  };

  useEffect(() => {
    location.search && getMovie(query);
  }, [location.search, query]);

  const getMovie = query => {
    api.getMovie(query).then(res => setMovies(res));
  };

  return (
    <>
      <SearchForm
        className={s.SearchForm}
        query={query}
        onSubmit={handleMovieSearch}
      />
      <SearchList
        match={match}
        movies={movies}
        pathname={location.pathname}
        query={query}
      />
    </>
  );
};

MovieSearchView.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default MovieSearchView;
