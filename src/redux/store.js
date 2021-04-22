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
import bookReducer from './books/reducer';
import { todosReducer } from './todos';

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

const booksPersistConfig = {
  key: 'bookDetails',
  storage,
};

const store = configureStore({
  // Root Reducer
  reducer: {
    navMenu: persistReducer(navMenuPersistConfig, navMenuReducer),
    books: persistReducer(booksPersistConfig, bookReducer),
    todos: todosReducer,
    // books: bookReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

// Persistor
const persistor = persistStore(store);

export default { store, persistor }; // eslint-disable-line
