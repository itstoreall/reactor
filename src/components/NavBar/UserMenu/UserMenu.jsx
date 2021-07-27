import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import useStyles from './UserMenuStyles';

const UserMenu = ({ avatar, name, onLogout }) => {
  const s = useStyles();

  return (
    <div className={s.UserMenuContainer}>
      <img className={s.UserAvatar} src={avatar} alt={name} width="32" />
      <span className={s.UserName}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapState = state => ({
  name: authSelectors.getUserName(state),
  avatar: authSelectors.getUserAvatar(state),
});

const mapDispatch = {
  onLogout: authOperations.logout, // Logout
};

export default connect(mapState, mapDispatch)(UserMenu);
