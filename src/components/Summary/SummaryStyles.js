import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Tech Icons
  TechIconList: {
    display: 'flex',
    marginBottom: 50,

    '& li': { marginRight: 15 },
    '& svg': { width: 30, height: 30, fill: refs.primaryYellow },
  },

  // Summary
  SummaryContent: {
    [`@media (min-width: ${refs.desktop}px)`]: {
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    // backgroundColor: 'skyblue',
    // box-shadow: 5px 8.66px 20px 0px rgba(0, 0, 0, 0.15);

    // Aside
    '& aside': {
      [`@media (min-width: ${refs.desktop}px)`]: {
        width: 300,
        marginRight: 50,
        borderRight: '1px solid #fff',
        overflow: 'scroll',
        // backgroundColor: '#1e2939',
      },

      '& img': { borderRadius: '50%', marginBottom: 30 },
      '& h2': { marginBottom: 15, fontSize: 22, fontWeight: 600 },
      '& ul': { marginBottom: 30, '& li': { marginBottom: 10 } },
    },
  },

  // About Me
  aboutMe: {
    [`@media (min-width: ${refs.desktop}px)`]: { width: 700 },

    '& h1': { marginBottom: 140 },
  },
});
