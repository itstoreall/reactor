import { NavLink } from 'react-router-dom';
import useStyles from './NavBarStyles';
import { routes } from '../routes';

export default function NavBarLink({ toggleNavBar }) {
  const s = useStyles();

  // const handleToggleNavMenu = () => onToggleVisible();

  return (
    <div className={s.Navigation}>
      {routes.map(({ path, label, showInMenu }) =>
        showInMenu ? (
          <NavLink
            key={path}
            to={path}
            exact
            className={s.link}
            activeClassName={s.activeLink}
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
