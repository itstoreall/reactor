import AuthorList from '../components/Authors';
import s from './ViewStyles.module.scss';

export default function AuthorView() {
  return (
    <>
      <section className={s.section}>
        <h1>Authors View</h1>
        <AuthorList />
      </section>
    </>
  );
}
