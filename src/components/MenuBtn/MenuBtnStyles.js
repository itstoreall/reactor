import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Btn
  MenuBtn: {
    position: 'fixed',
    top: 11,
    right: 10,
    width: 84,
    padding: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    },
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: refs.primaryColor,
    backgroundColor: 'transparent',
    border: `2px solid ${refs.accentBg}`,
    borderRadius: 4,
    outline: 'none',
    zIndex: 3,

    '&:hover': {
      backgroundColor: refs.primaryColor,
      color: refs.darkColor,
      border: `2px solid ${refs.primaryColor}`,
    },
  },

  // Active Btn
  activeMenuBtn: {
    composes: 'navMenuButton',
    position: 'fixed',
    top: 11,
    right: 10,
    width: 84,
    padding: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    },
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: refs.primaryBg,
    backgroundColor: 'transparent',
    border: `2px solid ${refs.primaryBg}`,
    borderRadius: 4,
    outline: 'none',

    '&:hover': {
      backgroundColor: refs.primaryBg,
      color: refs.primaryWhiteColor,
    },
  },
});
