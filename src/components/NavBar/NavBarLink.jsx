import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';
import { authSelectors } from '../../redux/auth';
import Context from '../../Context';
import s from './NavBar.module.scss';

// const { log } = console;

export default function NavBarLink() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const { toggleNavBar } = useContext(Context);

  return (
    <div className={s.navigation}>
      {routes.map(({ path, label, showInMenu, needsAuthorization }) =>
        showInMenu &&
        (!needsAuthorization ||
          needsAuthorization === Boolean(isAuthenticated)) ? (
          <NavLink
            key={path}
            to={path}
            exact
            className={s.NavBarLink}
            activeClassName={s.activeNavBarLink}
            onClick={toggleNavBar}
            replace
          >
            {label}
          </NavLink>
        ) : null,
      )}
    </div>
  );
}
