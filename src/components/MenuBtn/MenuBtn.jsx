import { useContext } from 'react';
import useStyles from './MenuBtnStyles';
import Context from '../../Context';

const MenuBtn = () => {
  const { toggleNavBar } = useContext(Context);
  const s = useStyles();

  return (
    <button className={s.MenuBtn} onClick={toggleNavBar}>
      Menu
    </button>
  );
};

export default MenuBtn;
