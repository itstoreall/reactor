import { connect } from 'react-redux';
import { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { routes } from '../routes';
import useStyles from './ContentStyles';

const Content = ({ visible }) => {
  const s = useStyles();

  return (
    <div className={visible ? s.NavMenu : s.Content}>
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
};

const mapState = state => ({
  visible: state.navMenu.visible,
});

export default connect(mapState)(Content);
