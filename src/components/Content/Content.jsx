import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../routes';
import useStyles from './ContentStyles';

export default function Content() {
  const s = useStyles();

  return (
    <div className={s.Content}>
      <Suspense fallback={<p>Content Loading...</p>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }) => (
            <Route key={path} path={path} exact={exact} component={Component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}
