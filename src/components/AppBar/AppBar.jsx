import { NavLink } from 'react-router-dom';
import useStyles from './AppBarStyles';

export default function AppBar() {
  const s = useStyles();

  return (
    <header className={s.Header}>
      <NavLink className={s.logoLink} to="/" replace>
        Reactor
      </NavLink>
    </header>
  );
}
