// Reused Modal
import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const reusedModalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  // addEventListener keydown
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // removeEventListener keydown
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Close by ESC
  handleKeyDown = e => {
    e.code === 'Escape' && this.props.onClose();
  };

  // Close by Backdrop
  handleBackdropClick = e => {
    e.currentTarget === e.target && this.props.onClose();
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      reusedModalRoot,
    );
  }
}
