import Resume from '../components/Resume';
import s from './ViewStyles.module.scss';

const ResumeView = () => {
  return (
    <section className={s.section}>
      <Resume />
    </section>
  );
};

export default ResumeView;
