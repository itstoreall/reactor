import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  techIcons: {
    display: 'flex',
    '& li': {
      marginRight: 15,
    },

    '& svg': {
      width: 30,
      height: 30,
      fill: refs.primaryYellow,
    },
  },

  container: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'skyblue',
    // box-shadow: 5px 8.66px 20px 0px rgba(0, 0, 0, 0.15);
  },
});
