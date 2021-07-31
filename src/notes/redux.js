/* ===========================================
** Redux

01. Install the Redux: 
npm install redux

02. Сreate Store:
В src создаем redux > store.js
import { createStore } from 'redux';
const reducer = (state = {}, action) => state;
const store = createStore(reducer);
export default store;

03. Import store to the index.js:
import store from './redux/store';

04.1 Create React-Redux:
npm install react-redux

04.2 Import to index.js
import { Provider } from 'react-redux';

05.3 Оборачиваем App в Provider с пропсами store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App initialValue={dataBase} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

06. mapState и mapDispatch:

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    value: state,
  };
};

const mapDispatchToProps = dispatch => ({
  doSomething: value => dispatch(actions.addContact(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

07. Install redux-devtools-extension:
Установить в Chrome Redux DevTools (единоразово)
npm install --save-dev redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';

08.1 Redux Toolkit installation
npm install @reduxjs/toolkit

08.2 Import to the store.js
import { configureStore } from '@reduxjs/toolkit';

09.1 Redux Persist installation
npm install redux-persist

09.2 Import to the store.js
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

------------------------------------------- */
