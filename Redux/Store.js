// store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  regOrLog: 'reg',
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_REG_LOG':
      return {
        ...state,
        regOrLog: action.payload,
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(rootReducer);

export default store;
