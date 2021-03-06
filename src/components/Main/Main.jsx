// import { connect } from 'react-redux';
import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../Routes/PrivateRoute';
import PublicRoute from '../Routes/PublicRoute';
import { routes } from '../routes';
import useStyles from './MainStyles';

const Main = () => {
  const s = useStyles();

  return (
    <main className={s.Main}>
      <article className={s.article}>
        <div className={s.container}>
          <Suspense fallback={<p className={s.loading}>LOADING...</p>}>
            <Switch>
              {routes.map(
                ({
                  path,
                  exact,
                  component: Component,
                  needsAuthorization,
                  restricted,
                }) =>
                  needsAuthorization ? (
                    <PrivateRoute
                      key={path}
                      path={path}
                      exact={exact}
                      component={Component}
                    />
                  ) : restricted ? (
                    <PublicRoute
                      key={path}
                      path={path}
                      exact={exact}
                      redirectTo="/admin"
                      component={Component}
                      restricted
                    />
                  ) : (
                    <Route
                      key={path}
                      path={path}
                      exact={exact}
                      component={Component}
                    />
                  ),
              )}
              <Redirect to="/resume" />
            </Switch>
          </Suspense>
        </div>
      </article>
    </main>
  );
};

export default Main;
