// import { responsiveFontSizes } from '@material-ui/core';
import { createUseStyles } from 'react-jss';
// import { refs } from '../refs';

export default createUseStyles({
  Applications: {
    '& > ul': {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: 'red',
      '& > li': {
        backgroundColor: 'green',
        '&:not(:last-child)': {
          marginBottom: 30,
        },
      },
    },
  },

  thumb: {
    backgroundColor: 'red',
  },

  image: {
    display: 'block',
    width: '100%',
  },

  meta: {
    '& h3': {},
    '& p': {},
  },

  // list: {
  //   marginBottom: 50,
  // },

  // item: {
  //   marginBottom: 10,

  //   '& a': {
  //     fontSize: 22,
  //   },
  // },
});

// .portfolio-list {
//   margin-bottom: -30px;

//   > .item {
//     margin-bottom: 30px;
//   }
// }

// Product

// .product {
//   display: block;
//   text-decoration: none;
//   @include transition(box-shadow);

//   &:hover {
//     box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 0px 4px 4px rgba(0, 0, 0, 0.06),
//       0px 1px 1px rgba(0, 0, 0, 0.12);
//   }
// }

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
