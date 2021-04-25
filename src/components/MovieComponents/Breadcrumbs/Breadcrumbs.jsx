import { withRouter } from 'react-router-dom';
import s from './BreadcrumbsStyles.module.scss';

const Breadcrumbs = ({ location, history }) => {
  const handleBreadCrumps = e =>
    e.target.innerText === 'apps'
      ? history.push('/applications')
      : history.push(`/applications/movies`);

  return (
    <div className={s.breadcrumbs}>
      {location.pathname === '/applications/movies/search' ? (
        <>
          <button type="button" onClick={handleBreadCrumps}>
            apps
          </button>
          <span>&#8594;</span>
          <button type="button" onClick={handleBreadCrumps}>
            trends
          </button>
          <span>&#8594;</span>
          <button type="button">search</button>
        </>
      ) : location.pathname === '/applications/movies' ? (
        <>
          <button type="button" onClick={handleBreadCrumps}>
            apps
          </button>
          <span>&#8594;</span>
          <button type="button">trends</button>
        </>
      ) : null}
    </div>
  );
};

export default withRouter(Breadcrumbs);
