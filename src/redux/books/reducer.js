import { createReducer } from '@reduxjs/toolkit';
import { getBookDetails } from './actions';

// Initial state of the Books
const initialState = {
  bookDetails: {},
};

// Nav Menu reducer
const bookReducer = createReducer(initialState, {
  [getBookDetails]: (_, { payload }) => ({
    bookDetails: payload,
  }),
});

export default bookReducer;
