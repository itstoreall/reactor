import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

// const { log } = console;

const initialUserState = {
  id: null,
  name: null,
  email: null,
  gender: null,
  avatar: null,
};

// User Reducer (Registration)
const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.data,
});

// Token Reducer (Login)
const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.token,
});

// Error Reducer
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload, // payload is err.message
  [authActions.loginError]: (_, { payload }) => payload, // payload is err.message
});

export default combineReducers({
  user,
  token,
  error,
});
