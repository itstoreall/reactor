import Portfolio from '../components/Portfolio';
import s from './ViewStyles.module.scss';

export default function PortfolioView() {
  return (
    <section className={s.section}>
      <h1>Portfolio</h1>
      <Portfolio />
    </section>
  );
}
