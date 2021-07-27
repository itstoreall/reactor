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
  [authActions.loginSuccess]: (_, { payload }) => payload.data.user,
  [authActions.logoutSuccess]: (_, __) => initialUserState, // update user to initial
});

// Token Reducer (Login)
const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.token,
  [authActions.logoutSuccess]: (_, __) => null, // update token to null
});

// Error Reducer
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload, // payload is err.message
  [authActions.loginError]: (_, { payload }) => payload, // payload is err.message
  [authActions.logoutError]: (_, { payload }) => payload, // payload is err.message
});

export default combineReducers({
  user,
  token,
  error,
});
