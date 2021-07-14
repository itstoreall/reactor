import Portfolio from '../components/Portfolio';
import s from './ViewStyles.module.scss';

const PortfolioView = () => {
  return (
    <div className={s.AdminView}>
      <h1 className={s.viewTitle}>Portfolio</h1>
      <Portfolio />
    </div>
  );
};

export default PortfolioView;
