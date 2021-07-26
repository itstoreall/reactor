import { NavLink } from 'react-router-dom';
import useStyles from './AuthNavStyles';

const AuthNav = () => {
  const s = useStyles();

  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.Link}
        activeClassName={s.activetLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.Link}
        activeClassName={s.activetLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
