import { createUseStyles } from 'react-jss';
// import { refs } from '../../refs';

export const useStyles = createUseStyles({
  DeleteProjectWrap: {
    width: '100%',
    backgroundColor: 'pink',

    '& h3': {
      marginBottom: 30,
    },
  },

  // ConfirmDelete: {
  //   padding: 30,
  //   textAlign: 'center',
  //   borderRadius: 4,
  //   backgroundColor: refs.accentBg,

  //   '& h4': {
  //     marginBottom: 20,
  //     color: refs.primaryWhiteColor,
  //   },

  //   '& p': {
  //     marginBottom: 30,
  //     color: refs.primaryWhiteColor,
  //   },
  // },

  deleteBtnWrap: {
    display: 'flex',
    justifyContent: 'center',

    '& button:not(:last-child)': {
      marginRight: 20,
    },
  },
});
