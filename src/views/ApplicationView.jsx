import Applications from '../components/Applications';
import s from './ViewStyles.module.scss';

export default function ApplicationView({ match }) {
  return (
    <section className={s.section}>
      <h1>Application</h1>
      <Applications />
    </section>
  );
}
