import { createUseStyles } from 'react-jss';
import { makeStyles } from '@material-ui/core/styles';
import { refs } from '../../refs';

// s
export const useStyles = createUseStyles({
  DeleteProjectWrap: {
    paddingBottom: 50,
    width: '100%',

    '& h3': {
      marginBottom: 30,
    },
  },

  ProjectList: {
    color: refs.primaryColor,

    '& > li': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px 0',

      '&:not(:last-child)': {
        borderBottom: `1px solid ${refs.borderGreyColor}`,
      },
    },
  },

  ProjectItemBtnWrap: {
    minWidth: 75,
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

// mui
export const useMuiStyles = makeStyles({
  root: {},

  ProjectItemBtn: {
    width: 35,
    height: 35,

    '&:not(:last-child)': {
      marginRight: 3,
    },

    '&:hover > span > svg': {
      fill: refs.primaryWhiteColor,
    },
  },

  ProjectItemIcon: {
    fill: refs.primaryColor,
    width: 17,
    height: 17,
  },
});
