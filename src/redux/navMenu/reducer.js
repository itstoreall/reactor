import { VISIBLE } from './types';

const initialState = {
  visible: false,
};

const navMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case VISIBLE:
      return {
        visible: (state.visible = action.payload),
      };
    default:
      return state;
  }
};

export default navMenuReducer;
