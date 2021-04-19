import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Content: {
    // flex: 1,
    padding: 15,
    height: 'calc(100vh - 60px)',
    // overflow: 'scroll',

    [`@media (min-width: ${refs.tablet}px)`]: {
      padding: 30,
    },
  },
  NavMenu: {
    // flex: 1,
    padding: 15,
    height: 'calc(100vh - 60px)',
    overflow: 'hidden',
    // overflow: 'scroll',

    [`@media (min-width: ${refs.tablet}px)`]: {
      padding: 30,
    },
  },
});
