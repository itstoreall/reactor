import { createUseStyles } from 'react-jss';

export default createUseStyles({
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'pink',
  },
  activeLink: {
    color: 'skyblue',
  },
});
