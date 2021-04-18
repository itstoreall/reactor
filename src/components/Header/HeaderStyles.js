import { createUseStyles } from 'react-jss';

const primaryColor = '#9697b6';

export default createUseStyles({
  Header: {
    padding: '20px 0 20px 30px',
  },
  logoLink: {
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: 3,
    textTransform: 'uppercase',
    color: primaryColor,
  },
});
