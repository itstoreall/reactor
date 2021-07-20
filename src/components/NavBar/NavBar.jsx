import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import NavBarLink from './NavBarLink';
import Context from '../../Context';
import s from './NavBar.module.scss';

const navBarRoot = document.querySelector('#navbar-root');

const NavBar = () => {
  const { toggleNavBar } = useContext(Context);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  });

  // Close by backdrop
  const handleCloseByBackdrop = e =>
    e.currentTarget === e.target && toggleNavBar();

  // Close by ESC
  const handleCloseByEsc = e => e.code === 'Escape' && toggleNavBar();

  return createPortal(
    <div className={s.backdrop} onClick={handleCloseByBackdrop}>
      <div className={s.NavBar}>
        <NavBarLink />
      </div>
    </div>,
    navBarRoot,
  );
};

export default NavBar;
