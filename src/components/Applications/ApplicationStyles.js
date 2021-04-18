import { createUseStyles } from 'react-jss';
// import { refs } from '../refs';

export default createUseStyles({
  text: {
    '& > p': {
      lineHeight: 1.6,
      marginBottom: 30,
    },

    // [`@media (min-width: ${refs.tablet}px)`]: {},
  },
});
