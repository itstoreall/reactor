import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Applications (div)
  Applications: {
    // backgroundColor: 'skyblue',

    '& > ul': {
      display: 'flex',
      flexWrap: 'wrap',
      // justifyContent: 'space-between',

      '& > li': {
        [`@media (max-width: ${refs.tabletMax}px)`]: {
          '&:not(:last-child)': {
            marginBottom: 50,
          },
        },

        [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
          marginBottom: 0,
          width: 'calc(50% - 15px)',
          // maxWidth: 354,

          '&:not(:nth-child(2n))': {
            marginRight: 30,
          },

          '&:not(:nth-last-child(-n + 2))': {
            marginBottom: 40,
          },
        },

        [`@media (min-width: ${refs.desktop}px)`]: {
          width: 'calc(33% - 15px)',

          '&:not(:nth-child(3n))': {
            marginRight: 26,
          },

          '&:not(:nth-last-child(-n + 3))': {
            marginBottom: 40,
          },
        },

        [`@media (min-width: ${refs.desktopBig}px)`]: {
          width: 'calc(33% - 15px)',

          '&:not(:nth-child(3n))': {
            marginRight: 27,
          },
        },
      },
    },
  },

  // Thumb
  thumb: {
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 15,

    [`@media (min-width: ${refs.mobile}px)`]: {
      height: 189,
    },

    [`@media (min-width: ${refs.mobilePlus}px)`]: {
      height: 210,
    },

    [`@media (min-width: ${refs.tablet}px)`]: {
      height: 185,
    },

    [`@media (min-width: ${refs.desktop}px)`]: {
      height: 143,
    },

    [`@media (min-width: ${refs.desktopBig}px)`]: {
      height: 197,
    },

    '& img': {
      display: 'block',
      width: '100%',
    },

    '&:hover div, &:focus div': {
      transform: 'translateY(0)',
      opacity: 1,
    },

    // Overlay
    '& > div': {
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: refs.primaryYellow,

      transform: 'translateY(100%)',
      transition:
        'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: 0,

      // Text inside overlay
      '& p': {
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        fontSize: 14,
        lineHeight: 1.4,
        color: refs.darkColor,
        transform: 'opacity',
        transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 100ms',
        opacity: 0,
        cursor: 'default',
      },
    },

    // Text inside hovered overlay
    '&:hover p': {
      opacity: 1,
    },
  },

  // Meta
  meta: {
    '& h3': {
      marginBottom: 10,
      fontSize: 24,

      [`@media (min-width: ${refs.tablet}px)`]: {
        fontSize: 20,
      },
    },

    '& p': {
      marginBottom: 15,
      fontSize: 18,
      color: refs.primaryColor,

      [`@media (min-width: ${refs.tablet}px)`]: {
        fontSize: 14,
      },
    },

    '& a': {
      paddingRight: 10,
      fontSize: 20,
      fontWeight: 600,

      [`@media (min-width: ${refs.tablet}px)`]: {
        fontSize: 16,
      },

      '&:hover': {
        color: refs.primaryWhiteColor,
      },

      '&:not(:last-child)': {
        marginRight: 10,
        borderRight: `1px solid ${refs.primaryColor}`,

        '&:hover': {
          borderRight: `1px solid ${refs.primaryColor}`,
        },
      },
    },
  },
});
