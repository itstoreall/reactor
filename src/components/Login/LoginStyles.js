import { createUseStyles } from 'react-jss';

export default createUseStyles({
  LoginViewForm: {
    // backgroundColor: 'red',
  },

  LoginViewEmail: {
    width: '100%',
    // backgroundColor: 'skyblue',

    '& > label': {
      color: 'yellow',
      // backgroundColor: 'yellow',
    },

    '& > div': {
      // backgroundColor: 'yellow',

      '& > input': {
        // backgroundColor: 'skyblue',
      },
      '& > fieldset': {
        // backgroundColor: 'skyblue',
        border: '1px solid #fff',

        '& > legend': {
          '& > span': {},
        },
      },
    },
  },

  LoginViewPassword: {
    width: '100%',
    backgroundColor: 'pink',

    '& > label': {
      backgroundColor: 'yellow',
    },
  },

  LoginViewBtn: {
    // display: 'block',
    width: 200,
    height: 50,
    backgroundColor: 'green',
  },
});
