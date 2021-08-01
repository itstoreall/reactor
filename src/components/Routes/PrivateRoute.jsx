import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthorized = useSelector(authSelectors.getIsAuthenticated);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorized ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
