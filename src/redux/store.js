import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // link to localStorage
// import logger from 'redux-logger';
import navMenuReducer from './navMenu/reducer';
import appReducer from './app/reducer';
import authReducer from './auth/auth-reducer';

// Middleware
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

// Persist Config
const navMenuPersistConfig = {
  key: 'navMenu',
  storage,
};

const appPersistConfig = {
  key: 'app',
  storage,
};

const authPersistConfig = {
  key: 'auth',
  storage,
};

const store = configureStore({
  // Root Reducer
  reducer: {
    navMenu: persistReducer(navMenuPersistConfig, navMenuReducer),
    app: persistReducer(appPersistConfig, appReducer),
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

// Persistor
const persistor = persistStore(store);

export default { store, persistor }; // eslint-disable-line
