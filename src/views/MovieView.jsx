import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchForm from '../components/SearchForm';
import queryString from 'query-string';
import api from '../api';
import PropTypes from 'prop-types';

const MovieView = ({ location, match }) => {
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
      <SearchForm query={query} onSubmit={handleMovieSearch} />
      <MovieList
        match={match}
        movies={movies}
        pathname={location.pathname}
        query={query}
      />
    </>
  );
};

MovieView.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default MovieView;

// import { withRouter } from 'react-router-dom';
// import App from './MovieApp';
// import s from './ViewStyles.module.scss';

// const MovieView = ({ location, history }) => {
//   const handleGoBack = () =>
//     location.state && location.state.from
//       ? history.push(location.state.from)
//       : history.push('/applications');

//   const handleBreadCrumps = e =>
//     e.target.innerText === 'apps'
//       ? history.push('/applications')
//       : history.push(`/applications/movies`);

//   return (
//     <>
//       <section className={s.section}>
//         {location.pathname === '/applications/movies' ? (
//           <button className={s.goBackBtn} type="button" onClick={handleGoBack}>
//             &#8592; Go back
//           </button>
//         ) : (
//           <div className={s.breadcrumbs}>
//             <button type="button" onClick={handleBreadCrumps}>
//               apps
//             </button>
//             <span>&#8594;</span>
//             <button type="button" onClick={handleBreadCrumps}>
//               trends
//             </button>
//             <span>&#8594;</span>
//             <button type="button">search</button>
//           </div>
//         )}
//         <h1>Movies</h1>
//         <App />
//       </section>

//       <ul className={s.useList}>
//         <li>use</li>
//       </ul>
//     </>
//   );
// };

// export default withRouter(MovieView);
