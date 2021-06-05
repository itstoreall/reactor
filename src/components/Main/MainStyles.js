import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Article (article)
  article: {
    margin: '0 auto',

    '& h1': {
      fontSize: 32,
      marginBottom: 40,
    },
  },

  // Container (div)
  container: {
    padding: {
      left: 15,
      right: 15,
    },
    margin: '0 auto',

    [`@media (min-width: ${refs.mobile}px)`]: {
      width: Number(refs.mobile),
    },

    [`@media (min-width: ${refs.mobilePlus}px)`]: {
      width: Number(refs.mobilePlus),
    },

    [`@media (min-width: ${refs.tablet}px)`]: {
      padding: {
        left: 30,
        right: 30,
      },
      width: Number(refs.tablet),
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      width: Number(refs.desktop),
    },

    [`@media (min-width: ${refs.desktopBig}px)`]: {
      width: Number(refs.desktopBig),
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

  loading: {
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
