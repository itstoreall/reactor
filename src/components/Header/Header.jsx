import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <NavLink className="logo" to="/">
      Reactor
    </NavLink>
  );
}
