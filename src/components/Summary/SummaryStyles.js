import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Tech Icons
  TechIconList: {
    display: 'flex',

    [`@media (max-width: ${refs.desktopMax}px)`]: {
      justifyContent: 'center',
    },

    '& li': {
      '&:not(:last-child)': {
        marginRight: 15,

        [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
          marginRight: 25,
        },
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

      [`@media (min-width: ${refs.modilePlus}px)`]: {
        width: 43,
        height: 43,
      },

      [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
        width: 50,
        height: 50,
      },

      [`@media (min-width: ${refs.desktop}px)`]: {
        width: 35,
      },
    },
  },

  // Summary
  SummaryContent: {
    // backgroundColor: 'skyblue',
    [`@media (min-width: ${refs.desktop}px)`]: {
      display: 'flex',
    },
    // backgroundColor: 'skyblue',
    // box-shadow: 5px 8.66px 20px 0px rgba(0, 0, 0, 0.15);

    // Aside
    '& aside': {
      [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
        display: 'flex',
        flexWrap: 'wrap',
      },

      [`@media (min-width: ${refs.desktop}px)`]: {
        paddingRight: 50,
        width: 320,
        borderRight: `1px solid ${refs.secondaryBg}`,
        // backgroundColor: '#1e2939',
      },
    },
  },

  // Avatar (section)
  avatar: {
    paddingBottom: 40,
    borderBottom: `1px solid ${refs.secondaryBg}`,

    [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
      paddingBottom: 60,
      width: '100%',
    },

    '& img': {
      display: 'block',
      borderRadius: '50%',
      // marginBottom: 30,

      [`@media (max-width: ${refs.desktopMax}px)`]: {
        margin: '0 auto 30px',
      },
    },

    '& h1': {
      marginBottom: 10,
      textAlign: 'center',
    },

    '& b': {
      display: 'block',
      marginBottom: 30,
      fontSize: 22,
      fontWeight: 500,
      textAlign: 'center',
      color: refs.secondaryWhiteColor,

      [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
        marginBottom: 50,
      },
    },
  },

  // Contacts (section)
  contacts: {
    padding: '30px 0',
    borderBottom: `1px solid ${refs.secondaryBg}`,

    [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
      width: 300,
      borderRight: `1px solid ${refs.secondaryBg}`,
    },

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

      [`@media (min-width: ${refs.desktop}px)`]: {
        fontSize: 22,
      },
    },

    '& ul': {
      '& li': {
        color: refs.secondaryWhiteColor,

        '&:not(:last-child)': {
          marginBottom: 10,

          [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
            marginBottom: 20,
          },
        },

        [`@media (min-width: ${refs.modile}px)`]: {
          fontSize: 20,
        },

        [`@media (min-width: ${refs.modilePlus}px)`]: {
          fontSize: 22,
        },

        [`@media (min-width: ${refs.desktop}px)`]: {
          fontSize: 16,
        },

        '& a': {
          paddingLeft: 10,
          fontWeight: 400,

          [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
            display: 'block',
            paddingTop: 7,
            paddingLeft: 0,
            fontSize: 20,
          },
        },
      },
    },
  },

  // Skills (div)
  skillsWrap: {
    padding: '30px 0',
    borderBottom: `1px solid ${refs.secondaryBg}`,

    [`@media (min-width: ${refs.modile}px) and (max-width: ${refs.desktopMax}px)`]: {
      display: 'flex',

      '& section': {
        width: '50%',
      },
    },

    [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
      padding: 0,
    },

    '& section': {
      [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
        width: 190,
        padding: '30px 0',
      },

      '&:not(:last-child)': {
        marginBottom: 30,
        [`@media (min-width: ${refs.modile}px) and (max-width: ${refs.desktopMax}px)`]: {
          marginBottom: 0,
          borderRight: `1px solid ${refs.secondaryBg}`,
        },
      },

      '&:last-child': {
        [`@media (min-width: ${refs.modile}px) and (max-width: ${refs.desktopMax}px)`]: {
          paddingLeft: 20,
        },
      },

      '&:first-child': {
        [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
          paddingLeft: 20,
        },
      },
    },
    // backgroundColor: 'skyblue',

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

      [`@media (min-width: ${refs.desktop}px)`]: {
        fontSize: 22,
      },
    },

    '& ul': {
      '& li': {
        fontSize: 20,
        color: refs.secondaryWhiteColor,

        [`@media (min-width: ${refs.desktop}px)`]: {
          fontSize: 16,
        },

        '&:not(:last-child)': {
          marginBottom: 7,
        },
      },
    },
  },

  // About Me
  aboutMe: {
    [`@media (min-width: ${refs.desktop}px)`]: {
      paddingLeft: 50,
      width: 550,
    },

    // '& h1': { marginBottom: 140 },
  },
});
