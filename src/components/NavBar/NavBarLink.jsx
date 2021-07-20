import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../../Context';
import s from './NavBar.module.scss';
import { routes } from '../routes';

export default function NavBarLink() {
  const { toggleNavBar } = useContext(Context);
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
