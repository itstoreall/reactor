import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Tech Icons
  techIcons: {
    display: 'flex',

    '& li': { marginRight: 15 },
    '& svg': { width: 30, height: 30, fill: refs.primaryYellow },
  },

  // Summary
  summaryWrap: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'skyblue',
    // box-shadow: 5px 8.66px 20px 0px rgba(0, 0, 0, 0.15);

    '& aside': {
      backgroundColor: '#1e2939',

      '& img': { borderRadius: '50%' },
      '& h2': { marginBottom: 15, fontSize: 22, fontWeight: 600 },
      '& ul': {
        marginBottom: 30,

        '& li': {
          marginBottom: 10,
        },
      },
    },
  },
});
