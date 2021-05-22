import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Tech Icons
  TechIconList: {
    display: 'flex',
    justifyContent: 'center',
    // paddingBottom: 40,
    // marginBottom: 40,

    '& li': {
      '&:not(:last-child)': {
        marginRight: 15,
      },
    },

    '& svg': {
      width: 30,
      height: 30,
      fill: refs.primaryYellow,

      [`@media (min-width: ${refs.modile}px)`]: {
        width: 35,
        height: 35,
      },

      // [`@media (min-width: ${refs.modilePlus}px)`]: {
      //   width: 45,
      //   height: 45,
      // },
    },
  },

  // Summary
  SummaryContent: {
    // backgroundColor: 'skyblue',
    // [`@media (min-width: ${refs.desktop}px)`]: {
    //   display: 'flex',
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
    // backgroundColor: 'skyblue',
    // box-shadow: 5px 8.66px 20px 0px rgba(0, 0, 0, 0.15);

    // Aside
    '& aside': {
      // [`@media (min-width: ${refs.desktop}px)`]: {
      //   // width: 300,
      //   marginRight: 50,
      //   borderRight: '1px solid #fff',
      //   overflow: 'scroll',
      //   // backgroundColor: '#1e2939',
      // },
      //   // Photo (image)
      //   '& img': {
      //     display: 'block',
      //     margin: '0 auto',
      //     borderRadius: '50%',
      //     marginBottom: 30,
      //   },
      //   '& h1': {
      //     textAlign: 'center',
      //     marginBottom: 10,
      //   },
      //   '& b': {
      //     display: 'block',
      //     marginBottom: 30,
      //     fontSize: 22,
      //     fontWeight: 500,
      //     textAlign: 'center',
      //   },
      //   // '& h2': {
      //   //   marginBottom: 15,
      //   //   fontSize: 26,
      //   //   fontWeight: 600,
      //   // },
      //   '& ul': {
      //     // paddingBottom: 20,
      //     // marginBottom: 20,
      //     // [`@media (min-width: ${refs.modile}px)`]: {
      //     //   paddingBottom: 25,
      //     //   marginBottom: 25,
      //     // },
      //     // [`@media (min-width: ${refs.modilePlus}px)`]: {
      //     //   paddingBottom: 30,
      //     //   marginBottom: 30,
      //     // },
      //   },
      // },
    },
  },

  // Avatar (section)
  avatar: {
    paddingBottom: 40,
    borderBottom: `1px solid ${refs.secondatyBg}`,

    '& img': {
      display: 'block',
      margin: '0 auto',
      borderRadius: '50%',
      marginBottom: 30,
    },

    '& h1': {
      textAlign: 'center',
      marginBottom: 10,
    },

    '& b': {
      display: 'block',
      marginBottom: 30,
      fontSize: 22,
      fontWeight: 500,
      textAlign: 'center',
    },

    // '& h2': {
    //   marginBottom: 15,
    //   fontSize: 26,
    //   fontWeight: 600,
    // },

    '& ul': {
      // paddingBottom: 20,
      // marginBottom: 20,
      // [`@media (min-width: ${refs.modile}px)`]: {
      //   paddingBottom: 25,
      //   marginBottom: 25,
      // },
      // [`@media (min-width: ${refs.modilePlus}px)`]: {
      //   paddingBottom: 30,
      //   marginBottom: 30,
      // },
    },
  },

  // Contacts (section)
  contacts: {
    padding: '30px 0',
    borderBottom: `1px solid ${refs.secondatyBg}`,

    '& h2': {
      marginBottom: 20,
      fontSize: 20,
      fontWeight: 600,

      [`@media (min-width: ${refs.modile}px)`]: {
        fontSize: 24,
      },

      [`@media (min-width: ${refs.modilePlus}px)`]: {
        fontSize: 26,
      },
    },

    '& ul': {
      '& li': {
        // fontSize: 16,
        // fontWeight: 600,
        color: refs.secondaryWhiteColor,

        '&:not(:last-child)': {
          marginBottom: 10,
        },

        [`@media (min-width: ${refs.modile}px)`]: {
          fontSize: 20,
        },

        [`@media (min-width: ${refs.modilePlus}px)`]: {
          fontSize: 22,
        },

        '& a': {
          paddingLeft: 10,
          // fontSize: 18,
          fontWeight: 400,

          // [`@media (min-width: ${refs.modile}px)`]: {
          //   // fontSize: 22,
          // },
        },
      },
    },
  },

  // Skills (div)
  skillsWrap: {
    padding: '30px 0',
    borderBottom: `1px solid ${refs.secondatyBg}`,

    [`@media (min-width: ${refs.modile}px)`]: {
      display: 'flex',

      '& section:first-child': {
        marginRight: 20,
      },
    },

    '& section': {
      width: '50%',

      '&:not(:last-child)': {
        // paddingRight: 30,
        borderRight: `1px solid ${refs.secondatyBg}`,
      },
    },

    '& h2': {
      marginBottom: 20,
      fontSize: 22,
      fontWeight: 600,

      [`@media (min-width: ${refs.modile}px)`]: {
        fontSize: 24,
      },

      [`@media (min-width: ${refs.modilePlus}px)`]: {
        fontSize: 26,
      },
    },

    '& ul': {
      '& li': {
        marginBottom: 7,
        fontSize: 20,
        color: refs.secondaryWhiteColor,
      },
    },
  },

  // About Me
  aboutMe: {
    // [`@media (min-width: ${refs.desktop}px)`]: { width: 700 },

    '& h1': { marginBottom: 140 },
  },
});
