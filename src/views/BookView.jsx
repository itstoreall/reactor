import Books from '../components/Books';
import s from './ViewStyles.module.scss';

export default function BookView({ match }) {
  return (
    <>
      <section className={s.section}>
        <h1>Books</h1>
        <Books match={match} />
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
}
