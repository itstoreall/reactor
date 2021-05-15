// import { responsiveFontSizes } from '@material-ui/core';
import { createUseStyles } from 'react-jss';
// import { refs } from '../refs';

export default createUseStyles({
  Applications: {
    '& > p': {
      lineHeight: 1.6,
      marginBottom: 30,
    },

    '& .item': {
      display: 'block',
      marginBottom: 10,
    },

    // [`@media (min-width: ${refs.tablet}px)`]: {},
  },

  thumb: {
    backgroundColor: 'red',

    '& > img': {
      display: 'block',
    },
  },

  list: {
    marginBottom: 50,
  },

  item: {
    marginBottom: 10,

    '& a': {
      fontSize: 22,
    },
  },
});
