import { withRouter } from 'react-router-dom';
import Navigation from './Navigation';
import s from './AppBar.module.scss';

const AppBar = ({ location }) => {
  return (
    <header className={s.pageHeader}>
      <div className={s.containerHeader}>
        {location.pathname === '/applications/movies/search' ? (
          <h1>Movie search</h1>
        ) : location.pathname === '/applications/movies' ? (
          <h1>Trends</h1>
        ) : (
          <h1>Movie description</h1>
        )}

        <Navigation />
      </div>
    </header>
  );
};

export default withRouter(AppBar);
