import Admin from '../components/Admin';
import s from './ViewStyles.module.scss';

const AdminView = () => {
  return (
    <div className={s.AdminView}>
      <h1 className={s.viewTitle}>Admin panel</h1>
      <Admin />
    </div>
  );
};

export default AdminView;
