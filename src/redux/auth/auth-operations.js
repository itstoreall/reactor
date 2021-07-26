import axios from 'axios';
import authActions from './auth-actions';

const { log } = console;

axios.defaults.baseURL = 'https://reactor-rest-api.herokuapp.com/api';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// Register Operation
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/register', credentials);

    dispatch(authActions.registerSuccess(response.data));
  } catch (err) {
    dispatch(authActions.registerError(err.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    dispatch(authActions.loginSuccess(response.data));
  } catch (err) {
    dispatch(authActions.loginError(err.message));
  }
};

const logout = () => dispatch => {};

const getCurrentUser = () => (dispatch, getState) => {};

export default { register, login, logout, getCurrentUser }; // eslint-disable-line
