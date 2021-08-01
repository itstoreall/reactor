import { useContext } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import sprite from '../../svg/sprite.svg';
import { authOperations, authSelectors } from '../../redux/auth';
import Context from '../../Context';
import useStyles from './AppBarStyles';

// const { log } = console;

const AppBar = ({ isAuthenticated, onLogout }) => {
  const { showNavBar, toggleNavBar } = useContext(Context);
  const s = useStyles();

  const handleLogin = () => {
    showNavBar && toggleNavBar();
  };

  const handleLogout = () => {
    showNavBar && toggleNavBar();
    onLogout();
  };

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
            onClick={handleLogin}
          >
            <svg className={s.lock}>
              <use href={`${sprite}#lock`}></use>
            </svg>
          </NavLink>
        ) : (
          <NavLink to="/resume" className={s.logoutBtm} onClick={handleLogout}>
            <svg className={s.unlock}>
              <use href={`${sprite}#unlock`}></use>
            </svg>
          </NavLink>
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
