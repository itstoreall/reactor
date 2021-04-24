import React, { Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from '../../components/MovieComponents/AppBar';
import s from './MovieStyles.module.scss';

const TrendView = lazy(() =>
  import('./TrendView' /* webpackChunkName: "Trends" */),
);
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage' /* webpackChunkName: "MovieDetails" */),
);
const MovieSearch = lazy(() =>
  import('./MovieSearch' /* webpackChunkName: "MovieSearch" */),
);

const App = () => (
  <>
    <AppBar />
    <main>
      <div className={s.containerMain}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route
              path="/applications/movies/:movieId"
              component={MovieDetailsPage}
            />
            <Route path="/applications/movies" exact component={TrendView} />
            <Route
              path="/applications/movies/search/:movieId"
              component={MovieDetailsPage}
            />
            <Route
              path="/applications/movies/search"
              exact
              component={MovieSearch}
            />
            {/* <Redirect to="/" /> */}
          </Switch>
        </Suspense>
      </div>
    </main>
  </>
);

export default App;
