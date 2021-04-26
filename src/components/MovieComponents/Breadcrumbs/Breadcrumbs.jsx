import { withRouter } from 'react-router-dom';
import s from './BreadcrumbsStyles.module.scss';

const Breadcrumbs = ({ location, history }) => {
  const handleApps = () => {
    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push('/applications');
  };

  const handleBreadCrumps = e => {
    e.target.name === 'trends'
      ? history.push(`/applications/movies`)
      : e.target.name === 'apps'
      ? history.push(`/applications`)
      : history.push(location.state.from);
  };

  return (
    <div className={s.breadcrumbs}>
      {location.pathname === '/applications/movies/search' ? (
        <>
          <button name="apps" type="button" onClick={handleBreadCrumps}>
            Apps
          </button>
          <span>&#8594;</span>
          <button name="trends" type="button" onClick={handleBreadCrumps}>
            Trends
          </button>
          <span>&#8594;</span>
          <button name="search" type="button">
            Search
          </button>
        </>
      ) : location.pathname === '/applications/movies' ? (
        <button className={s.appsBtn} type="button" onClick={handleApps}>
          &#8592; Apps
        </button>
      ) : null}
    </div>
  );
};

export default withRouter(Breadcrumbs);
