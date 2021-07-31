import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import useStyles from './UserMenuStyles';

const UserMenu = ({ avatar, name }) => {
  const s = useStyles();

  return (
    <div className={s.UserMenuContainer}>
      <img className={s.UserAvatar} src={avatar} alt={name} width="32" />
      <span className={s.UserName}>{name}</span>
    </div>
  );
};

const mapState = state => ({
  name: authSelectors.getUserName(state),
  avatar: authSelectors.getUserAvatar(state),
});

export default connect(mapState)(UserMenu);
