import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import sprite from '../../svg/sprite.svg';
import { authOperations, authSelectors } from '../../redux/auth';
import useStyles from './AppBarStyles';

const AppBar = ({ isAuthenticated, onLogout }) => {
  const s = useStyles();

  return (
    <header className={s.Header}>
      <NavLink className={s.logoLink} to="/" replace>
        Reactor
      </NavLink>

      <div className={s.lockWrap}>
        {!isAuthenticated ? (
          <NavLink
            to="/login"
            exact
            className={s.loginBtn}
            // activeClassName={s.activetLink}
          >
            <svg className={s.lock}>
              <use href={`${sprite}#lock`}></use>
            </svg>
          </NavLink>
        ) : (
          <button className={s.logoutBtm} type="button" onClick={onLogout}>
            <svg className={s.unlock}>
              <use href={`${sprite}#unlock`}></use>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

const mapState = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatch = {
  onLogout: authOperations.logout, // Logout
};

export default connect(mapState, mapDispatch)(AppBar);
