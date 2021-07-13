import useStyles from './MenuBtnStyles';

const MenuBtn = ({ toggleNavBar }) => {
  const s = useStyles();

  return (
    <button className={s.MenuBtn} onClick={toggleNavBar}>
      Menu
    </button>
  );
};

export default MenuBtn;
