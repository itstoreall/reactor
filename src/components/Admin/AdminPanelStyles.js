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

// muiForm
export const muiForm = makeStyles({
  root: {
    // TextField Wrap (div)
    '& .MuiFormControl-root': {
      '&:not(:last-child)': {
        marginBottom: 20,
      },

      // Label
      '& .MuiFormLabel-root': {
        color: refs.primaryColor,

        // Label upstairs
        '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          transform: 'translate(14px, -5px) scale(0.65)',
        },

        // Lable inside
        '&.MuiInputLabel-outlined': {
          transform: 'translate(14px, 13px) scale(1)',
        },
      },

      // Input Wrap (div)
      '& .MuiInputBase-root': {
        '&.MuiOutlinedInput-root': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: refs.primaryColor,
          },

          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: refs.primaryColor,
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: refs.primaryColor,
          },
        },

        '& .MuiOutlinedInput-input': {
          padding: '12px 14px',
        },

        '& .MuiInputBase-input': {
          color: refs.primaryWhiteColor,
        },

        '& .PrivateNotchedOutline-root-2': {
          '&.MuiOutlinedInput-notchedOutline': {},

          '& .PrivateNotchedOutline-legendLabelled-4': {
            fontSize: '0.65em',
          },
        },
      },
    },

    // Cancel Btn
    '& .MuiButton-root': {
      '&#cancelBtn': {
        marginRight: 20,
      },
    },
  },
});
