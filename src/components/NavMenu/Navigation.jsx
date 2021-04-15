import { NavLink } from 'react-router-dom';
import useStyles from './NavStyles';
import { routes } from '../routes';

export default function Navigation() {
  const s = useStyles();

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
          >
            {label}
          </NavLink>
        ) : null,
      )}
    </div>
  );
}
