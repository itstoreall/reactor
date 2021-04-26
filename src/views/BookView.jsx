import { withRouter } from 'react-router-dom';
import AppBar from '../components/Books/AppBar';
import Books from '../components/Books';
import s from './ViewStyles.module.scss';

const BookView = ({ location, history }) => {
  const handleGoBack = () => {
    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push('/applications');
  };

  return (
    <>
      <section className={s.section}>
        <h1>Books</h1>
        <button className={s.goBackBtn} type="button" onClick={handleGoBack}>
          &#8592; Go back
        </button>
        <AppBar />
        <Books />
      </section>

      <ul className={s.useList}>
        <li>use json-server</li>
        <li>use server/db.json</li>
        <li>use axios</li>
        <li>use try...catch</li>
        <li>use toastify</li>
      </ul>
    </>
  );
};

export default withRouter(BookView);
