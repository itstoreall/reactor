import { createUseStyles } from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';
import { refs } from '../../refs';

// s -----------------------------------------
export const useStyles = createUseStyles({
  addProjectWrap: {
    minHeight: '100%',
    backgroundColor: refs.darkBg,
  },

  // Wrap
  inputsWrap: {
    marginBottom: '20px',

    '& h3, h4': {
      color: refs.primaryColor,
    },

    '& h4': {
      marginBottom: '20px',
    },
  },

  // Required
  requiredWrap: {
    [`@media (max-width: ${refs.tabletMax}px)`]: {
      marginBottom: '20px',
    },
  },

  // Optionally
  optionallyWrap: {
    // backgroundColor: 'skyblue',
  },

  // Buttons
  buttonWrap: {
    // backgroundColor: 'palevioletred',
    marginBottom: '40px',
  },

  // Request List
  requestList: {
    // backgroundColor: 'grey',
  },
}); // ---------------------------------------

// muiForm -----------------------------------
export const muiForm = makeStyles({
  root: {
    // TextField Wrap (div)
    '& .MuiFormControl-root': {
      width: '100%',

      '&:not(:last-child)': {
        marginBottom: 20,
      },

      // Label
      '& .MuiFormLabel-root': {
        color: refs.primaryColor,

        // Label upstairs
        '&.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          transform: 'translate(14px, -5px) scale(0.76)',
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

        // Outline
        '& .PrivateNotchedOutline-root-3': {
          '&.MuiOutlinedInput-notchedOutline': {},

          // Legend
          '& .PrivateNotchedOutline-legendLabelled-5': {
            fontSize: '0.65em',
          },
        },
      },
    },

    '& .MuiButton-root': {
      // Reset Btn
      '&#resetBtn': {
        marginRight: 10,
      },
    },
  },
}); // ---------------------------------------

// ==================

// import { createUseStyles } from 'react-jss';

// export const useStyles = createUseStyles({
//   CreateProject: {
//     backgroundColor: 'pink',
//     width: '100%',
//     minHeight: 100,
//   },

//   DeleteProject: {
//     backgroundColor: 'skyblue',
//     width: '100%',
//     minHeight: 100,
//   },

//   Adm3: {
//     backgroundColor: 'green',
//     width: '100%',
//     minHeight: 100,
//   },
// });
