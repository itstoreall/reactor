import Summary from '../components/Summary';
import s from './ViewStyles.module.scss';

const SummaryView = () => {
  return (
    <section className={s.section}>
      <h1>Summary</h1>
      <Summary />
    </section>
  );
};

export default SummaryView;
