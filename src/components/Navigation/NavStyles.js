import { createUseStyles } from 'react-jss';

export default createUseStyles({
  Navigation: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '1px solid teal',
    listStyle: 'none',
    margin: 0,
    padding: 10,
    minWidth: 130,
    overflow: 'auto',
  },

  link: {
    backgroundColor: 'inherit',
    textDecoration: 'none',
    padding: 10,
    color: 'teal',

    '&:hover': {
      color: '#fff',
      backgroundColor: 'teal',
    },
  },

  activeLink: {
    backgroundColor: 'tomato',
    color: '#f1f1f1',

    '&:hover': {
      color: '#fff',
      backgroundColor: 'tomato',
    },
  },
});
