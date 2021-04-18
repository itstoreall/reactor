import Home from '../components/Home';
import s from './ViewStyles.module.scss';

export default function HomeView() {
  return (
    <section className={s.section}>
      <h1>Home</h1>
      <Home />
    </section>
  );
}
