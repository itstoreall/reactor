import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Content: {
    padding: 15,
    margin: '0 auto',

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
    padding: 15,
    margin: '0 auto',
    overflow: 'hidden',

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

  Loading: {
    color: 'tomato',
  },
});
