import { useState, useEffect, Suspense, lazy } from 'react';
import { NavLink, Route } from 'react-router-dom';
import api from '../../api/movieAPI';
import s from './MovieStyles.module.scss';

const MoviePreview = lazy(() =>
  import(
    '../../components/MovieComponents/MoviePreview' /* webpackChunkName: "MoviePreview" */
  ),
);
const Cast = lazy(() =>
  import(
    '../../components/MovieComponents/Cast' /* webpackChunkName: "Cast" */
  ),
);
const Reviews = lazy(() =>
  import(
    '../../components/MovieComponents/Reviews' /* webpackChunkName: "Reviews" */
  ),
);

const MovieDetailsPage = ({ history, location, match }) => {
  const [state, setState] = useState({
    poster_path: '',
    title: null,
    release_date: '',
    overview: null,
    genres: [],
    credits: null,
    reviews: null,
  });

  useEffect(() => {
    const { movieId } = match.params;
    api
      .getMovieDetails(movieId)
      .then(movieDetails => setState({ ...movieDetails }));
  }, []); // eslint-disable-line

  const handleGoBack = () => {
    location.state && location.state.query
      ? history.push({
          pathname: '/movies',
          search: `?query=${location.state.query}`,
        })
      : history.push('/');
  };

  return (
    <>
      {state.poster_path && (
        <>
          <button className={s.goBackBtn} onClick={handleGoBack}>
            &#8592; Go back
          </button>
          <MoviePreview state={state} />
        </>
      )}

      <div className={s.additionalInfoWrap}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  ...location.state,
                  path: `/movies/${state.id}`,
                },
              }}
            >
              Cost
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  ...location.state,
                  path: `/movies/${state.id}`,
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <Route
          path={`${match.path}/cast`}
          render={props => <Cast credits={state.credits} />}
        />
        <Route
          path={`${match.path}/reviews`}
          render={props => <Reviews reviews={state.reviews} />}
        />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
