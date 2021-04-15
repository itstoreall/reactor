import { createUseStyles } from 'react-jss';

const modile = 414;
// const tablet = 768;
// const desktop = 900;

export default createUseStyles({
  // NavMenu
  NavMenu: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  navMenuButton: {
    position: 'absolute',
    right: 0,
    width: 150,
    padding: {
      top: 10,
      left: 20,
      right: 20,
      bottom: 10,
    },
    fontSize: 16,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'teal',
    border: 'none',
    outline: 'none',

    '&:hover': {
      backgroundColor: 'tomato',
    },
  },

  // Navigation
  Navigation: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    // borderRight: '1px solid teal',
    listStyle: 'none',
    margin: 0,
    padding: 10,
    paddingTop: 100,

    minWidth: 130,
    overflow: 'auto',
    backgroundColor: 'skyblue',

    [`@media (min-width: ${modile}px)`]: {
      width: 250,
    },
  },

  link: {
    backgroundColor: 'inherit',
    textDecoration: 'none',
    padding: 10,
    fontSize: 22,
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
