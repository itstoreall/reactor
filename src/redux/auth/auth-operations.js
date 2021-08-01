import axios from 'axios';
import authActions from './auth-actions';

// const { log } = console;

axios.defaults.baseURL = 'http://localhost:5288/api';
// axios.defaults.baseURL = 'https://reactor-rest-api.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

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

// Login Operation
const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    token.set(response.data.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (err) {
    dispatch(authActions.loginError(err.message));
  }
};

// Logout Operation
const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (err) {
    dispatch(authActions.logoutError(err.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (err) {
    dispatch(authActions.getCurrentUserError(err.message));
  }
};

export default { register, login, logout, getCurrentUser }; // eslint-disable-line
