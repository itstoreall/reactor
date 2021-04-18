import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // NavMenu
  NavMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  navMenuButton: {
    position: 'absolute',
    top: 11,
    right: 10,
    width: 120,
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
    color: refs.primaryColor,
    backgroundColor: refs.primaryBg,
    border: `2px solid ${refs.accentBg}`,
    borderRadius: 4,
    outline: 'none',

    '&:hover': {
      backgroundColor: refs.accentBg,
      color: refs.primaryWhiteColor,
    },
  },

  // Navigation
  Navigation: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    listStyle: 'none',
    margin: 0,
    padding: 10,
    paddingTop: 100,
    overflow: 'auto',
    backgroundColor: refs.darkBg,

    [`@media (min-width: ${refs.modile}px)`]: {
      width: 200,
    },
  },

  link: {
    backgroundColor: 'inherit',
    textDecoration: 'none',
    padding: 10,
    fontSize: 16,
    color: refs.primaryColor,
    borderRadius: 4,

    '&:not(:last-child)': {
      marginBottom: 5,
    },

    '&:hover': {
      color: refs.primaryWhiteColor,
      backgroundColor: refs.accentBg,
    },
  },

  activeLink: {
    backgroundColor: refs.primaryBg,
    color: refs.primaryWhiteColor,

    '&:hover': {
      color: refs.primaryWhiteColor,
      backgroundColor: refs.primaryBg,
    },
  },
});
