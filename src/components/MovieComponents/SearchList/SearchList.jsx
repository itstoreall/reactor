import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './SearchListStyles.module.scss';

const SearchList = ({ movies, pathname, query }) => (
  <ul className={s.SearchList}>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <NavLink
          to={{
            pathname: `${pathname}/${id}`,
            state: {
              query: query,
            },
          }}
        >
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
);

SearchList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default withRouter(SearchList);
