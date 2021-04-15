import { createUseStyles } from 'react-jss';

export default createUseStyles({
  // NavMenu
  NavMenu: {
    // maxWidth: 400,
    width: '100%',
    height: '100%',
    backgroundColor: 'skyblue',
  },
  navMenuButton: {
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
    // margin: 30,
    // minWidth: 140,
    // fontSize: 16,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'teal',
    border: 'none',
    borderRadius: 4,
    outline: 'none',

    '&:hover': {
      backgroundColor: 'tomato',
    },
  },

  // Navigation
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
