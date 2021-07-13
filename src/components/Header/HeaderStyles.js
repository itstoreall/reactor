import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Header: {
    paddingLeft: 15,
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    height: 60,
    width: '100%',

    [`@media (max-width: 767px)`]: {
      // maxWidth: 450,
    },

    [`@media (min-width: ${refs.tablet}px)`]: {
      paddingLeft: 30,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      // width: '100%',
      // maxWidth: 1440,
    },
  },
  logoLink: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: refs.primaryColor,
  },

  // navBarBtn: {
  //   position: 'fixed',
  //   top: 11,
  //   right: 10,
  //   width: 84,
  //   padding: {
  //     top: 10,
  //     left: 10,
  //     right: 10,
  //     bottom: 10,
  //   },
  //   fontSize: 14,
  //   fontWeight: 500,
  //   letterSpacing: 1,
  //   textTransform: 'uppercase',
  //   cursor: 'pointer',
  //   color: refs.primaryColor,
  //   backgroundColor: refs.primaryBg,
  //   border: `2px solid ${refs.accentBg}`,
  //   borderRadius: 4,
  //   outline: 'none',

  //   '&:hover': {
  //     backgroundColor: refs.primaryColor,
  //     color: refs.darkColor,
  //     border: `2px solid ${refs.primaryColor}`,
  //   },
  // },
  // activeNavBarBtn: {
  //   composes: 'navMenuButton',
  //   position: 'fixed',
  //   top: 11,
  //   right: 10,
  //   width: 84,
  //   padding: {
  //     top: 10,
  //     left: 10,
  //     right: 10,
  //     bottom: 10,
  //   },
  //   fontSize: 14,
  //   fontWeight: 500,
  //   textTransform: 'uppercase',
  //   cursor: 'pointer',
  //   color: refs.primaryBg,
  //   backgroundColor: 'transparent',
  //   border: `2px solid ${refs.primaryBg}`,
  //   borderRadius: 4,
  //   outline: 'none',

  //   '&:hover': {
  //     backgroundColor: refs.primaryBg,
  //     color: refs.primaryWhiteColor,
  //   },
  // },
});
