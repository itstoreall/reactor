import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Content: {
    padding: 15,
    margin: '0 auto',

    [`@media (min-width: ${refs.mobile}px)`]: {
      width: 375,
    },

    [`@media (min-width: ${refs.mobilePlus}px)`]: {
      width: 414,
    },

    [`@media (min-width: ${refs.tablet}px)`]: {
      padding: 30,
      width: 768,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      padding: 30,
      width: '100%',
      maxWidth: 1200,
    },

    [`@media (min-width: ${refs.desktopBig}px)`]: {
      padding: 30,
      width: '100%',
      maxWidth: 1200,
    },
  },

  NavMenu: {
    padding: 15,
    margin: '0 auto',
    overflow: 'hidden',

    [`@media (max-width: 767px)`]: {
      maxWidth: 450,
    },

    [`@media (min-width: ${refs.tablet}px)`]: {
      padding: 30,
      maxWidth: 768,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      padding: 30,
      width: '100%',
      maxWidth: 1200,
    },
  },

  Loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'calc(100vh - 180px)',
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 3,
    color: refs.primaryColor,
  },
});
