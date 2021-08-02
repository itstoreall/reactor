import { makeStyles } from '@material-ui/core/styles';
import { refs } from '../refs';

export const useStyles = makeStyles({
  root: {
    '& form': {
      '& > div': {
        marginBottom: 25,
        width: '100%',

        // Label
        '& > label': {
          color: refs.primaryColor,

          '&.Mui-focused': {
            color: refs.linkColor,
          },
        },

        // Wrap
        '& > div': {
          '&.MuiOutlinedInput-root.Mui-focused input': {
            color: refs.linkColor,
          },

          // Input
          '&.MuiOutlinedInput-root .MuiInputBase-input': {
            color: refs.primaryColor,
          },

          // Eye
          '&.MuiOutlinedInput-root button > span > svg': {
            fill: refs.primaryColor,
          },
          '&.MuiOutlinedInput-root.Mui-focused button > span > svg': {
            fill: refs.linkColor,
          },

          // Fieldset
          '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: refs.primaryColor,
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: refs.linkColor,
          },
        },
      },

      // Submit Button
      '& > button': {
        width: '100%',
        height: 50,
      },
    },
  },
});
