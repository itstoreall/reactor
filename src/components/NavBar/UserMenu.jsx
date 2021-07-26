import s from './NavBar.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => {
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

export default UserMenu;
