import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './TrendListStyles.module.scss';

const TrendList = ({ trends, location }) => {
  console.log(trends[2]);
  return (
    <ul className={s.TrendList}>
      {trends.length > 0 &&
        trends.map(
          trend =>
            trend.title !== undefined && (
              <li key={trend.id}>
                <NavLink
                  to={{
                    pathname: `/applications/movies/search/${trend.id}`,
                    state: { from: location },
                  }}
                >
                  <div className={s.previewCard}>
                    <div className={s.thumb}>
                      <img
                        src={`https://image.tmdb.org/t/p/w400/${trend.poster_path}`}
                        alt={trend.title}
                      />
                    </div>
                    <div className={s.meta}>
                      <h3>{trend.title}</h3>
                      <span>{`User Score: ${trend.vote_average * 10}%`}</span>
                    </div>
                  </div>
                </NavLink>
              </li>
            ),
        )}
    </ul>
  );
};

TrendList.propTypes = {
  trends: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(TrendList);
