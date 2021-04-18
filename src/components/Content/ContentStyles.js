import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Content: {
    // flex: 1,
    // overflow: 'auto',
    padding: 15,

    [`@media (min-width: ${refs.tablet}ps)`]: {
      padding: 30,
    },
  },
});
