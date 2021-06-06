import { createUseStyles } from 'react-jss';
import { refs } from './components/refs';

export default createUseStyles({
  // Resume
  AppOption_one: {
    height: '100vh',
    overflow: 'scroll',

    [`@media screen and (max-width: ${refs.desktopMax}px)`]: {
      '& article': {
        paddingBottom: 100,
      },
    },

    // Hide scrollbar for IE, Edge and Firefox
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',

    // Hide scrollbar for Chrome, Safari and Opera
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    [`@media screen and (min-width: ${refs.desktop}px)`]: {
      overflow: 'hidden',
    },
  },

  // Portfolio
  AppOption_two: {
    height: '100vh',
    overflow: 'scroll',

    // Hide scrollbar for IE, Edge and Firefox
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',

    // Hide scrollbar for Chrome, Safari and Opera
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '& article': {
      paddingTop: 30,
      paddingBottom: 100,
    },

    '& h1': {
      marginBottom: 40,
    },
  },
});
