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
});
