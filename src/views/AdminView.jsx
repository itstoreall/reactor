import Admin from 'components/Admin';
import s from './ViewStyles.module.scss';

const AdminView = () => {
  return (
    <div className={s.AdvimView}>
      <h1>Admin panel</h1>
      <Admin />
    </div>
  );
};

export default AdminView;
