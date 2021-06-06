import { createReducer } from '@reduxjs/toolkit';
import { toggleOverflow } from './actions';

// Initial state of the Nav Menu
const initialState = {
  hidden: false,
};

// Nav Menu reducer
const appReducer = createReducer(initialState, {
  [toggleOverflow]: (_, { payload }) => ({
    hidden: payload,
  }),
});

export default appReducer;
