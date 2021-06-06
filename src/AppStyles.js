import { createUseStyles } from 'react-jss';
import { refs } from './components/refs';

export default createUseStyles({
  option_one: {
    height: '100vh',
    overflow: 'scroll',

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

  option_two: {
    height: '100vh',
    overflow: 'scroll',

    // Hide scrollbar for IE, Edge and Firefox
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',

    // Hide scrollbar for Chrome, Safari and Opera
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});
