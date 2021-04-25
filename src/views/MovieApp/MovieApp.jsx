import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from '../../components/MovieComponents/AppBar';
import s from './MovieStyles.module.scss';

const MovieTrendView = lazy(() =>
  import('./MovieTrendView' /*webpackChunkName: "Trends"*/),
);
const MovieDetailsView = lazy(() =>
  import('./MovieDetailsView' /*webpackChunkName: "MovieDetails"*/),
);
const MovieSearchView = lazy(() =>
  import('./MovieSearchView' /*webpackChunkName: "SearchView"*/),
);

const App = () => (
  <>
    <AppBar />
    <div className={s.containerMain}>
      <Suspense fallback={<p>Suspense Loading...</p>}>
        <Switch>
          <Route exact path="/applications/movies" component={MovieTrendView} />
          <Route
            path="/applications/movies/search/:movieId"
            component={MovieDetailsView}
          />
          <Route
            path="/applications/movies/search"
            component={MovieSearchView}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>

    <ul className={s.useList}>
      <li>use TMDb</li>
      <li>use Hooks</li>
      <li>use query-string</li>
      <li>use axios</li>
      <li>use async await</li>
      <li>use try...catch</li>
      <li>use withRouter</li>
      <li>use Suspense/lazy</li>
      <li>use css module</li>
    </ul>
  </>
);

export default App;
