import { createUseStyles } from 'react-jss';
import { refs } from './components/refs';

// const primaryBg = '#2c3139';

// const modile = 375; // *
// const tablet = 768; // *
// const desktop = 900;

export default createUseStyles({
  App: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    margin: '0 auto',
    // backgroundColor: refs.primaryBg,

    [`@media (min-width: ${refs.desktop}px)`]: {
      maxWidth: 1440,
    },
  },
});
