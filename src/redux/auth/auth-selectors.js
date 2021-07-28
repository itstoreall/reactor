const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatar;

export default { getIsAuthenticated, getUserName, getUserAvatar }; // eslint-disable-line
