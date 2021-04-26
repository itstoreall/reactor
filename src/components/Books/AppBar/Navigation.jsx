import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.scss';

const Navigation = () => {
  return (
    <nav className={s.NavList}>
      <NavLink
        exact
        to="/applications/books"
        className={s.NavLink}
        activeClassName={s.NavLink__active}
      >
        Books
      </NavLink>
      <NavLink
        to="/applications/books/authors"
        className={s.NavLink}
        activeClassName={s.NavLink__active}
      >
        Authors
      </NavLink>
    </nav>
  );
};

export default Navigation;
