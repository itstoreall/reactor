import { NavLink } from 'react-router-dom';
import s from './NavBar.module.scss';
import { routes } from '../routes';

export default function NavBarLink({ toggleNavBar }) {
  // const s = useStyles();

  // const handleToggleNavMenu = () => onToggleVisible();

  return (
    <div className={s.navigation}>
      {routes.map(({ path, label, showInMenu }) =>
        showInMenu ? (
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
