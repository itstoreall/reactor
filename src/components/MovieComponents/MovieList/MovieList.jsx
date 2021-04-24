import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies, pathname, query }) => (
  <ul className="linksList">
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default withRouter(MovieList);
