import { withRouter } from 'react-router-dom';
import App from './MovieApp';
import s from './ViewStyles.module.scss';

const MovieView = ({ location, history }) => {
  console.log(location);
  const handleGoBack = () => {
    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push('/applications');
  };

  return (
    <>
      <section className={s.section}>
        {location.pathname === '/applications/movies' && (
          <button className={s.goBackBtn} type="button" onClick={handleGoBack}>
            &#8592; Go back
          </button>
        )}
        <h1>Movies</h1>
        <App />
      </section>

      <ul className={s.useList}>
        <li>use</li>
      </ul>
    </>
  );
};

export default withRouter(MovieView);
