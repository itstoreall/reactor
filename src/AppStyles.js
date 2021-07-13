import { createUseStyles } from 'react-jss';
// import { refs } from './components/refs';

export default createUseStyles({
  // Portfolio
  AppWrap: {
    height: '100vh',
    overflow: 'scroll',

    '-ms-overflow-style': 'none', // IE, Edge
    'scrollbar-width': 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome, Safari, Opera
    },

    // '& article': {
    //   // paddingTop: 60,
    //   // paddingBottom: 80,
    // },

    '& h1': {
      marginBottom: 40,
    },
  },
});
