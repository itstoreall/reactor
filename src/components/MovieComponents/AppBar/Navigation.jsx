import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.scss';

const Navigation = () => {
  return (
    <nav className={s.NavList}>
      <NavLink
        exact
        to="/applications/movies"
        className={s.NavLink}
        activeClassName={s.NavLink__active}
      >
        Trends
      </NavLink>
      <NavLink
        to="/applications/movies/search"
        className={s.NavLink}
        activeClassName={s.NavLink__active}
      >
        Search
      </NavLink>
    </nav>
  );
};

export default Navigation;
