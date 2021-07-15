import { createUseStyles } from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';

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
});

// muiBtn
export const muiBtn = makeStyles({
  addProjectBtn: {
    marginBottom: 30,
  },

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
