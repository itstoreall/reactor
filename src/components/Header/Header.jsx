import { NavLink } from 'react-router-dom';
import useStyles from './HeaderStyles';

export default function Header() {
  const s = useStyles();

  return (
    <header className={s.Header}>
      <NavLink className={s.logoLink} to="/" replace>
        Reactor
      </NavLink>
    </header>
  );
}
