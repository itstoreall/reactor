import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const reusedModalRoot = document.querySelector('#modal-root');

// Reused Modal
export default function Modal({ children, onClose }) {
  // Close by ESC
  useEffect(() => {
    const handleKeyDown = e => {
      e.code === 'Escape' && onClose();
    };

    // componentDidMount()
    window.addEventListener('keydown', handleKeyDown);

    // componentWillUnmount()
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Close by Backdrop
  const handleBackdropClick = e => {
    e.currentTarget === e.target && onClose();
  };

  return createPortal(
    <div className="Modal__backdrop" onClick={handleBackdropClick}>
      <div className="Modal__content">{children}</div>
    </div>,
    reusedModalRoot,
  );
}
