import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import NavBarLink from './NavBarLink';
import PropTypes from 'prop-types';
import s from './NavBar.module.scss';

const navBarRoot = document.querySelector('#navbar-root');

const NavBar = ({ toggleNavBar }) => {
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
      <div className={s.content}>
        <NavBarLink toggleNavBar={toggleNavBar} />
      </div>
    </div>,
    navBarRoot,
  );
};

NavBar.propTypes = {
  toggleNavBar: PropTypes.func.isRequired,
};

export default NavBar;
