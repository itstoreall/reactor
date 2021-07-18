import { createUseStyles } from 'react-jss';
import { refs } from '../../refs';

export const useStyles = createUseStyles({
  deleteProjectWrap: {
    width: '100%',
    backgroundColor: 'pink',
  },

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
