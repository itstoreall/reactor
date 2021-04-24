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
    <main>
      <div className={s.containerMain}>
        <Suspense fallback={<p>Suspense Loading...</p>}>
          <Switch>
            <Route
              exact
              path="/applications/movies"
              component={MovieTrendView}
            />
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
    </main>
  </>
);

export default App;
