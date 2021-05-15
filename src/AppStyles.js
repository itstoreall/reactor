import { createUseStyles } from 'react-jss';
import { refs } from './components/refs';

export default createUseStyles({
  App: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    margin: '0 auto',
    // backgroundColor: refs.primaryBg,

    // [`@media (min-width: ${refs.desktop}px)`]: {
    //   maxWidth: 1440,
    // },
  },
  NavMenu: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
    // backgroundColor: refs.primaryBg,

    [`@media (min-width: ${refs.desktop}px)`]: {
      maxWidth: 1440,
    },
  },
});
