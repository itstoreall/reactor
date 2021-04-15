import { createUseStyles } from 'react-jss';

const modile = 375;
const tablet = 768;
const desktop = 900;

export default createUseStyles({
  App: {
    // display: 'flex',
    height: '100vh',
    maxWidth: 1280,
    margin: '0 auto',

    [`@media (min-width: ${modile}px)`]: {},

    [`@media (min-width: ${tablet}px)`]: {},

    [`@media (min-width: ${desktop}px)`]: {
      display: 'flex',
    },
  },
});
