import { withRouter } from 'react-router-dom';
import AppBar from '../components/Books/AppBar';
import AuthorList from '../components/Books/Authors';
import s from './ViewStyles.module.scss';

const AuthorView = ({ location, history }) => {
  const handleGoBack = () => {
    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push('/applications');
  };

  return (
    <>
      <section className={s.section}>
        <h1>Authors</h1>
        <button className={s.goBackBtn} type="button" onClick={handleGoBack}>
          &#8592; Go back
        </button>
        <AppBar />
        <AuthorList />
      </section>
    </>
  );
};

export default withRouter(AuthorView);
