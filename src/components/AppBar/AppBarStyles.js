import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Header
  Header: {
    paddingLeft: 15,
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    height: 60,
    width: '100%',

    position: 'fixed',
    zIndex: 1,
    backgroundColor: '#212225a1',
    backdropFilter: 'blur(10px)',
    boxShadow: refs.headerShadow,

    // [`@media (max-width: 767px)`]: {
    //   position: 'fixed',
    //   zIndex: 1,
    //   backgroundColor: refs.darkColor,
    //   // maxWidth: 450,
    // },

    [`@media (min-width: ${refs.tablet}px)`]: {
      paddingLeft: 30,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      // width: '100%',
      // maxWidth: 1440,
    },
  },

  // Logo
  logoLink: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: refs.primaryColor,
  },

  lockWrap: {
    marginLeft: 'auto',
    paddingRight: 110,
  },

  // Login
  loginBtn: {
    display: 'block',

    '& > svg': {
      width: 20,
      height: 23,
    },
  },

  // link: {
  //   display: 'inline-block',
  //   textDecoration: 'none',
  //   padding: 12,
  //   fontWeight: 700,
  //   color: 'pink',
  // },
  // activeLink: {
  //   color: 'skyblue',
  // },

  // Logout
  logoutBtm: {
    padding: 0,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',

    '& > svg': {
      width: 20,
      height: 23,
    },
  },

  lock: {
    fill: refs.primaryYellow,
  },

  unlock: {
    fill: refs.linkColor,
  },
});
