import { createReducer } from '@reduxjs/toolkit';
import { toggleVisible } from './actions';

// Initial state of the Nav Menu
const initialState = {
  visible: false,
};

// Nav Menu reducer
const navMenuReducer = createReducer(initialState, {
  [toggleVisible]: (_, { payload }) => ({
    visible: payload,
  }),
});

export default navMenuReducer;

/* Reducer #1

import { VISIBLE } from './types';

const initialState = {
  visible: false,
};

// Nav Menu reducer
const navMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case VISIBLE:
      return {
        visible: action.payload,
      };
    default:
      return state;
  }
};

export default navMenuReducer;
*/
