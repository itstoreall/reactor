import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Header: {
    paddingLeft: 15,
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: 450,
    height: 60,

    [`@media (min-width: ${refs.tablet}px)`]: {
      paddingLeft: 30,
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
