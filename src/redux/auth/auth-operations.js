import axios from 'axios';
import authActions from './auth-actions';

// axios.defaults.baseURL = 'https...'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = 'Bearer ${token';
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => dispatch => {};

const login = credentials => dispatch => {};

const logout = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

export default { register, login, logout, getCurrentUser }; // eslint-disable-line
