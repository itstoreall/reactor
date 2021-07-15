import { createUseStyles } from 'react-jss';

export default createUseStyles({
  AppWrap: {
    height: '100vh',
    overflow: 'scroll',

    '-ms-overflow-style': 'none', // IE, Edge
    'scrollbar-width': 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome, Safari, Opera
    },
  },
});
