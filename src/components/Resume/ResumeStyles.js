import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Tech Icons
  TechIconList: {
    display: 'flex',
    // backgroundColor: 'skyblue',

    [`@media (max-width: ${refs.desktopMax}px)`]: {
      justifyContent: 'center',
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      marginBottom: 50,
    },

    '& li': {
      '&:not(:last-child)': {
        marginRight: 15,

        [`@media (min-width: ${refs.mobile}px and (max-width: ${refs.mobileMax}px))`]: {
          marginRight: 20,
        },

        [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
          marginRight: 25,
        },

        [`@media (min-width: ${refs.desktop}px)`]: {
          marginRight: 20,
        },
      },
    },

    '& svg': {
      width: 30,
      height: 30,
      fill: refs.primaryYellow,

      [`@media (min-width: ${refs.mobile}px)`]: {
        width: 35,
        height: 35,
      },

      [`@media (min-width: ${refs.mobilePlus}px)`]: {
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

  // Resume
  ResumeContent: {
    width: '100%',
    [`@media (min-width: ${refs.desktop}px)`]: {
      display: 'flex',
      justifyContent: 'center',
    },
    // backgroundColor: 'skyblue',
    // box-shadow: 5px 8.66px 20px 0px rgba(0, 0, 0, 0.15);
  },

  // Aside
  aside: {
    padding: {
      top: 30,
      // bottom: 30,
    },
    marginBottom: 30,

    [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      padding: {
        top: 40,
        right: 50,
        bottom: 50,
      },
      width: 320,
      height: 'calc(100vh - 60px)',
      borderRight: `1px solid ${refs.secondaryBg}`,
      overflow: 'scroll',

      // Hide scrollbar for IE, Edge and Firefox
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',

      // Hide scrollbar for Chrome, Safari and Opera
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  },

  // Avatar (section)
  avatar: {
    paddingBottom: 40,
    borderBottom: `1px solid ${refs.secondaryBg}`,
    // backgroundColor: '#1e2939',

    [`@media (min-width: ${refs.mobile}px)`]: {
      minHeight: 460,
    },

    [`@media (min-width: ${refs.mobilePlus}px)`]: {
      minHeight: 490,
    },

    [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
      paddingBottom: 60,
      width: '100%',
      minHeight: 540,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: 290,
    },

    '& img': {
      display: 'block',
      borderRadius: '50%',

      [`@media (max-width: ${refs.desktopMax}px)`]: {
        margin: '0 auto 30px',
      },
    },

    '& h1': {
      marginBottom: 10,
      fontSize: 32,
      fontWeight: 600,
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
      fontSize: 24,
      fontWeight: 600,

      [`@media (min-width: ${refs.mobile}px)`]: {
        fontSize: 24,
      },

      [`@media (min-width: ${refs.mobilePlus}px)`]: {
        fontSize: 26,
      },

      [`@media (min-width: ${refs.desktop}px)`]: {
        fontSize: 22,
      },
    },

    '& ul': {
      marginBottom: 30,

      '& li': {
        color: refs.secondaryWhiteColor,

        '&:not(:last-child)': {
          marginBottom: 10,

          [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
            marginBottom: 20,
          },
        },

        [`@media (min-width: ${refs.mobile}px)`]: {
          fontSize: 20,
        },

        [`@media (min-width: ${refs.mobilePlus}px)`]: {
          fontSize: 22,
        },

        [`@media (min-width: ${refs.desktop}px)`]: {
          fontSize: 16,
        },

        // a
        '& a': {
          paddingLeft: 10,
          fontWeight: 400,
          color: refs.primaryColor,

          [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
            display: 'block',
            paddingTop: 7,
            paddingLeft: 0,
            fontSize: 20,
          },

          '&:hover': {
            color: refs.primaryWhiteColor,
          },
        },
      },
    },
  },

  // Social Icons
  socialList: {
    display: 'flex',

    '& span:not(:last-child)': {
      marginRight: 25,

      [`@media (min-width: ${refs.tablet}px)`]: {
        marginRight: 20,
      },
    },

    '& span a': {
      display: 'block',

      '& svg': {
        fill: refs.primaryColor,
        width: 30,
        height: 30,

        [`@media (min-width: ${refs.desktop}px)`]: {
          width: 25,
          height: 25,
        },

        '&:hover': {
          fill: refs.primaryWhiteColor,
        },
      },
    },
  },

  // Skills (div)
  skillsWrap: {
    padding: '30px 0',
    borderBottom: `1px solid ${refs.secondaryBg}`,

    [`@media (min-width: ${refs.mobile}px) and (max-width: ${refs.desktopMax}px)`]: {
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
        [`@media (min-width: ${refs.mobile}px) and (max-width: ${refs.desktopMax}px)`]: {
          marginBottom: 0,
          borderRight: `1px solid ${refs.secondaryBg}`,
        },
      },

      '&:last-child': {
        [`@media (min-width: ${refs.mobile}px) and (max-width: ${refs.desktopMax}px)`]: {
          paddingLeft: 20,
        },
      },

      '&:first-child': {
        [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
          paddingLeft: 20,
        },
      },
    },

    '& h2': {
      marginBottom: 20,
      fontSize: 22,
      fontWeight: 600,

      [`@media (min-width: ${refs.mobile}px)`]: {
        fontSize: 24,
      },

      [`@media (min-width: ${refs.mobilePlus}px)`]: {
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
          marginBottom: 10,
        },
      },
    },
  },

  // Download Resume (div)
  downloadResume: {
    padding: '30px 0',

    '& a:hover': {
      color: refs.primaryWhiteColor,
    },
  },

  // Primary Content ------------------------------
  primaryContent: {
    [`@media (min-width: ${refs.desktop}px)`]: {
      padding: {
        top: 40,
        left: 50,
        bottom: 70,
      },
      width: 550,
      height: 'calc(100vh - 60px)',
      overflow: 'scroll',

      // Hide scrollbar for IE, Edge and Firefox
      '-ms-overflow-style': 'none',
      'scrollbar-width': 'none',

      // Hide scrollbar for Chrome, Safari and Opera
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },

    '& section': {
      '&:not(:last-child)': {
        marginBottom: 40,
      },

      '& h1': {
        marginBottom: 10,
      },

      '& b': {
        display: 'block',
        marginBottom: 30,
        fontSize: 22,
        fontWeight: 500,
        color: refs.primaryColor,
      },

      '& h2': {
        marginBottom: 30,
      },

      '& h3': {
        marginBottom: 10,
        lineHeight: 1.4,

        '& span': {
          color: refs.primaryColor,
        },
      },

      '& ul': {
        paddingLeft: 30,
        listStyleType: 'disc',
        color: refs.secondaryWhiteColor,

        '& li': {
          lineHeight: 1.4,

          '&:not(:last-child)': {
            marginBottom: 5,
          },
        },
      },

      '& a:hover': {
        color: refs.primaryWhiteColor,
      },
    },
  },

  // Summary (p)
  summary: {
    lineHeight: 1.6,
    color: refs.secondaryWhiteColor,
  },

  // Date (p)
  date: {
    fontSize: 15,
    fontStyle: 'italic',
    color: refs.trinityWhiteColor,
  },

  // Job List Wrap (div)
  jobListWrap: {
    '&:not(:last-child)': {
      marginBottom: 30,
    },

    '& p': {
      marginBottom: 20,
    },
  },

  // Education (section)
  education: {
    '& div': {
      marginBottom: 30,
    },
  },
});
