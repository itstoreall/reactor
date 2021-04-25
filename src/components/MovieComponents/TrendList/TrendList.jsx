import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './TrendListStyles.module.scss';

const TrendList = ({ trends, location }) => (
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
                {trend.title}
              </NavLink>
            </li>
          ),
      )}
  </ul>
);

TrendList.propTypes = {
  trends: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(TrendList);
