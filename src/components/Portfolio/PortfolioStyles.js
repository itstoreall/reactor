import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  // Portfolio (section)
  Portfolio: {
    // backgroundColor: 'skyblue',

    '& > ul': {
      display: 'flex',
      flexWrap: 'wrap',

      '& > li': {
        [`@media (max-width: ${refs.tabletMax}px)`]: {
          '&:not(:last-child)': {
            marginBottom: 60,
          },
        },

        [`@media (min-width: ${refs.tablet}px) and (max-width: ${refs.desktopMax}px)`]: {
          marginBottom: 0,
          width: 339,

          '&:not(:nth-child(2n))': {
            marginRight: 30,
          },

          '&:not(:nth-last-child(-n + 2))': {
            marginBottom: 40,
          },
        },

        [`@media (min-width: ${refs.desktop}px)`]: {
          width: 260,

          '&:not(:nth-child(3n))': {
            marginRight: 30,
          },

          '&:not(:nth-last-child(-n + 3))': {
            marginBottom: 50,
          },
        },

        [`@media (min-width: ${refs.desktopBig}px)`]: {
          width: 360,
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
      height: 142,
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

    // Overlay (div)
    '& > div': {
      position: 'absolute',
      top: 0,
      left: 0,
      // display: 'flex',
      // alignItems: 'center',
      padding: 30,
      width: '100%',
      height: '100%',
      backgroundColor: refs.primaryYellow,

      transform: 'translateY(100%)',
      transition:
        'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: 0,
      overflow: 'scroll',

      '& h3': {
        display: 'block',
        paddingBottom: 15,
        fontSize: 20,
        color: refs.darkColor,

        [`@media (min-width: ${refs.desktop}px) and (max-width: ${refs.desktopBigMax}px)`]: {
          fontSize: 18,
        },
      },

      '& b': {
        display: 'block',
        marginBottom: 15,
        fontSize: 14,
        color: 'red',
      },

      // Text inside overlay
      '& ul': {
        paddingLeft: 20,
        listStyle: 'disc',
        fontSize: 16,
        lineHeight: 1.4,
        transform: 'opacity',
        transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 100ms',
        opacity: 0,
        cursor: 'default',

        [`@media (min-width: ${refs.desktop}px) and (max-width: ${refs.desktopBigMax}px)`]: {
          fontSize: 14,
        },

        '& li': {
          marginBottom: 7,
        },
      },
    },

    // Text inside hovered overlay
    '&:hover ul': {
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
      marginBottom: 10,
      fontSize: 16,
      lineHeight: 1.6,
      color: refs.secondaryWhiteColor,

      // ...

      display: '-webkit-box',
      '-webkit-line-clamp': 2,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',

      [`@media (min-width: ${refs.tablet}px)`]: {
        fontSize: 14,
      },

      [`@media (min-width: ${refs.desktop}px)`]: {
        lineHeight: 1.4,
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
