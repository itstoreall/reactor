import { createUseStyles } from 'react-jss';

const primaryBg = '#2c3139';

// const modile = 375; // *
// const tablet = 768; // *
const desktop = 900;

export default createUseStyles({
  App: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    margin: '0 auto',
    backgroundColor: primaryBg,

    [`@media (min-width: ${desktop}px)`]: {
      maxWidth: 1440,
    },
  },
});
