import { createUseStyles } from 'react-jss';

const primaryBg = '#2c3139';
const darkBg = '#2b2c30';
const accentBg = '#9697b6';
const primaryColor = '#9697b6';
const primaryWhiteColor = '#fff';

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
    top: 11,
    right: 10,
    width: 120,
    padding: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    },
    fontSize: 14,
    fontWeight: 500,
    textTransform: 'uppercase',
    cursor: 'pointer',
    color: primaryColor,
    backgroundColor: primaryBg,
    border: `2px solid ${accentBg}`,
    borderRadius: 4,
    outline: 'none',

    '&:hover': {
      backgroundColor: accentBg,
      color: primaryWhiteColor,
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
    backgroundColor: darkBg,

    [`@media (min-width: ${modile}px)`]: {
      width: 250,
    },
  },

  link: {
    backgroundColor: 'inherit',
    textDecoration: 'none',
    padding: 10,
    fontSize: 16,
    color: primaryColor,
    borderRadius: 4,

    '&:not(:last-child)': {
      marginBottom: 5,
    },

    '&:hover': {
      color: '#fff',
      backgroundColor: accentBg,
    },
  },

  activeLink: {
    backgroundColor: primaryBg,
    color: '#f1f1f1',

    '&:hover': {
      color: '#fff',
      backgroundColor: primaryBg,
    },
  },
});
