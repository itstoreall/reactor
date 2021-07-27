const getIsAuthenticated = state => state.auth.token;

const getUserId = state => state.auth.user.id;

const getUserName = state => state.auth.user.name;

const getUserAvatar = state => state.auth.user.avatar;

export default { getIsAuthenticated, getUserId, getUserName, getUserAvatar }; // eslint-disable-line
