import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './SearchListStyles.module.scss';

const SearchList = ({ movies, pathname, query }) => (
  <ul className={s.SearchList}>
    {movies.map(({ id, title, poster_path, vote_average }) => (
      <li key={id}>
        <NavLink
          to={{
            pathname: `${pathname}/${id}`,
            state: {
              query: query,
            },
          }}
        >
          <div className={s.previewCard}>
            <div className={s.thumb}>
              <img
                src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                alt={title}
              />
            </div>
            <div className={s.meta}>
              <h3>{title}</h3>
              <span>{`User Score: ${vote_average * 10}%`}</span>
            </div>
          </div>
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
