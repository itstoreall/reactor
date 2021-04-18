import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Header: {
    padding: '20px 0 20px 15px',

    [`@media (min-width: ${refs.tablet}ps)`]: {
      padding: '20px 0 20px 30px',
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
