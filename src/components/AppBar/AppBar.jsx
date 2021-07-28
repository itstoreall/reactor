import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import useStyles from './AppBarStyles';

const AppBar = ({ isAuthenticated }) => {
  const s = useStyles();

  return (
    <header className={s.Header}>
      <NavLink className={s.logoLink} to="/" replace>
        Reactor
      </NavLink>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapState = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapState)(AppBar);
