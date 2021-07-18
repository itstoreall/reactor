import AdminPanel from '../components/Admin';
import s from './ViewStyles.module.scss';

const AdminView = () => {
  return (
    <div className={s.AdminView}>
      <h1 className={s.viewTitle}>Admin panel</h1>
      <AdminPanel />
    </div>
  );
};

export default AdminView;
