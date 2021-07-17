import { createUseStyles } from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';
import { refs } from '../refs';

// const cancelButton = document.querySelector('#cancelBtn > span');

// s
export const useStyles = createUseStyles({
  Admin: {
    '& h2': {
      marginBottom: '30px',
    },

    '& .addProjectBtn': {
      marginBottom: 30,
    },

    '& .requestList': {
      //
    },
  },

  // Delete Project Modal
  deleteProjectModal: {
    padding: 30,
    textAlign: 'center',
    borderRadius: 4,
    backgroundColor: refs.accentBg,

    '& h2': {
      marginBottom: 20,
      color: refs.primaryWhiteColor,
    },

    '& p': {
      marginBottom: 30,
      color: refs.primaryWhiteColor,
    },
  },

  deleteBtnWrap: {
    display: 'flex',
    justifyContent: 'center',

    '& button:not(:last-child)': {
      marginRight: 20,
    },
  },
});

// muiBtn
export const muiBtn = makeStyles({
  // addProjectBtn: {
  //   marginBottom: 30,
  // },
  // '&.MuiButton-containedPrimary': {
  //   // backgroundColor: 'red',
  // },
  // '&.MuiButtonBase-root': {
  //   '&.MuiButton-root': {
  //     '&.MuiButton-contained': {
  //       // '&.makeStyles-root-29': {
  //       '&.MuiButton-containedPrimary': {
  //         backgroundColor: 'red',
  //       },
  //       // },
  //     },
  //   },
  // },
  // },
});
