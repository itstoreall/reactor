import { useState } from 'react';
import Navigation from './Navigation';
import useStyles from './NavStyles';

export default function NavMenu() {
  const [visible, setVisible] = useState(false);
  const s = useStyles();

  const toggleVisible = () => setVisible(prevVisible => !prevVisible);

  return (
    <div className={s.NavMenu}>
      <button className={s.navMenuButton} type="button" onClick={toggleVisible}>
        {visible ? 'Hide menu' : 'Show menu'}
      </button>
      {visible && <Navigation />}
    </div>
  );
}
