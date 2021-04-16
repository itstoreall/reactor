import { createStore } from 'redux';

// Initial State
const initialState = {
  navMenu: false,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'navMenu/visible':
      return {
        navMenu: (state.navMenu = action.payload),
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
