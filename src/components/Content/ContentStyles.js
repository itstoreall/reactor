import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Content: {
    // flex: 1,
    padding: 15,
    margin: '0 auto',
    // height: 'calc(100vh - 60px)',
    // overflow: 'scroll',

    [`@media (max-width: 767px)`]: {
      maxWidth: 450,
    },

    [`@media (min-width: ${refs.tablet}px)`]: {
      padding: 30,
      maxWidth: 768,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      maxWidth: 1200,
    },
  },

  NavMenu: {
    // flex: 1,
    padding: 15,
    margin: '0 auto',
    // height: 'calc(100vh - 60px)',
    overflow: 'hidden',
    // overflow: 'scroll',

    [`@media (min-width: ${refs.tablet}px)`]: {
      padding: 30,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      maxWidth: 1440,
    },
  },

  Loading: {
    color: 'tomato',
  },
});
