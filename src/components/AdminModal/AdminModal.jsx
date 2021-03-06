import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import Context from '../../Context';
import PropTypes from 'prop-types';
import s from './AdminModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const AdminModal = ({ children }) => {
  const { toggleModal } = useContext(Context);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  });

  // Close by backdrop
  const handleCloseByBackdrop = e => {
    e.currentTarget === e.target && toggleModal();
  };

  // Close by ESC
  const handleCloseByEsc = e => e.code === 'Escape' && toggleModal();

  return createPortal(
    <div className={s.backdrop} onClick={handleCloseByBackdrop}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot,
  );
};

AdminModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminModal;
