import Books from '../components/Books';
import s from './ViewStyles.module.scss';

export default function BookView() {
  return (
    <>
      <section className={s.section}>
        <h1>Books</h1>
        <Books />
      </section>

      <ul className={s.useList}>
        <li>use json-server</li>
        <li>use axios</li>
        <li>use server/db.json</li>
      </ul>
    </>
  );
}
