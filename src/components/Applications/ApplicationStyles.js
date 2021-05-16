// import { responsiveFontSizes } from '@material-ui/core';
import { createUseStyles } from 'react-jss';
import { refs } from '../refs';

export default createUseStyles({
  Applications: {
    '& > ul': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',

      '& > li': {
        maxWidth: 450,

        [`@media (max-width: 767px)`]: {
          '&:not(:last-child)': {
            marginBottom: 30,
          },
        },

        [`@media (min-width: ${refs.tablet}px) and (max-width: 899px)`]: {
          marginBottom: 0,
          width: 'calc(50% - 15px)',
          maxWidth: 354,

          '&:not(:nth-last-child(-n + 2))': {
            marginBottom: 30,
          },
        },

        [`@media (min-width: ${refs.desktop}px)`]: {
          width: 'calc(33% - 15px)',
          maxWidth: 370,

          '&:not(:nth-last-child(-n + 3))': {
            marginBottom: 30,
          },
        },
      },
    },
  },

  thumb: {
    position: 'relative',
    overflow: 'hidden',

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
      height: '100%',
      backgroundColor: 'rgba(33, 150, 243, 0.9)',

      transform: 'translateY(100%)',
      transition:
        'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: 0,

      // Text inside overlay
      '& p': {
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 10,
        transform: 'opacity',
        transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 250ms',
        opacity: 0,
        cursor: 'default',
      },
    },

    // Text inside hovered overlay
    '&:hover p': {
      opacity: 1,
    },
  },

  meta: {
    '& h3': {},
    '& p': {},
  },
});

// // Thumb

// .product-thumb {
//   position: relative;
//   overflow: hidden;

//   .product-overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     height: 100%;
//     background-color: rgba(33, 150, 243, 0.9);

//     transform: translateY(100%);
//     transition: transform 250ms $timing-function, opacity 250ms $timing-function;
//     opacity: 0;

//     .product:hover &,
//     .product:focus & {
//       transform: translateY(0);
//       opacity: 1;
//     }

//     .hover-text {
//       display: flex;
//       align-items: center;

//       height: 100%;
//       padding-left: 24px;
//       padding-right: 24px;

//       margin-top: 0;
//       margin-bottom: 0;
//       font-size: 18px;
//       line-height: 1.56;
//       color: #ffffff;

//       transform: opacity;
//       transition: opacity 250ms $timing-function 250ms;
//       opacity: 0;

//       .product:hover &,
//       .product:focus & {
//         opacity: 1;
//       }
//     }
//   }
// }

// // Meta

// .product-meta {
//   padding-top: 20px;
//   padding-right: 24px;
//   padding-bottom: 20px;
//   padding-left: 24px;

//   border-left: 1px solid #eeeeee;
//   border-right: 1px solid #eeeeee;
//   border-bottom: 1px solid #eeeeee;

//   .title {
//     margin-top: 0;
//     margin-bottom: 4px;
//     font-size: 18px;
//     line-height: 2;
//     letter-spacing: 0.06em;
//     text-align: left;
//     color: $secondary-text-color;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }

//   .text {
//     margin-top: 0;
//     margin-bottom: 0;
//     font-size: 16px;
//     line-height: 1.87;
//     color: $primary-text-color;
//   }
// }

// // Media 768px

// @media screen and (min-width: 768px) {
//   .filter-list {
//     display: flex;
//     justify-content: center;
//     margin-bottom: 30px;
//   }

//   .portfolio-list {
//     display: flex;
//     flex-wrap: wrap;

//     @media screen and (max-width: 1199px) {
//       > .item {
//         width: calc((100% - 30px) / 2);
//       }

//       > .item:not(:nth-child(2n)) {
//         margin-right: 30px;
//       }
//     }
//   }
// }

// // Media 1200px

// @media screen and (min-width: 1200px) {
//   .filter-list {
//     margin-bottom: 50px;
//   }

//   .portfolio-list {
//     > .item {
//       width: calc((100% - 60px) / 3);

//       &:not(:nth-child(3n)) {
//         margin-right: 30px;
//       }
//     }
//   }
// }
