// "homepage": "http://test.storeall.com.ua",
// "homepage": "https://itstoreall.github.io/reactor",

/* ======================================
// Redux connection

01. Install Redux and React-Redux: 
npm install redux
npm install react-redux

02. Creates redux > store.js
import { createStore } from 'redux';

const initialState = {
  value: 5,
};

const reducer = (state = initialState, action) => state;
const store = createStore(reducer);
export default store;

console.log(store.getState()); // {value: 5}

03. Add Provider to the index.js: 
import { Provider } from 'react-redux';
import store from './redux/store'
<Provider store={store}>
  <App />
</Provider>

04. Install Redux DevTools Extension:
npm install --save-dev redux-devtools-extension

04.1 In the store.js:
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducer, composeWithDevTools());

05.1 Install the Redux Toolkit:
npm install @reduxjs/toolkit

05.2 Uninstall Redux Devtools:
npm uninstall --save-dev redux-devtools-extension

06.1 Install the Logger:
npm i --save redux-logger

06.2 Import the logger and getDefaultMiddleware:
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

06.3 Declare middleware like new array with default gDM and logger:
const middleware = [...getDefaultMiddleware(), logger];

06.4 Add middleware to the store:
const store = configureStore({
  reducer: {
    navMenu,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

07. Install the Persistor
npm install redux-persist

--------------------------------------------- */

/** =================================================
 * Redux Toolkit
 *
 * - Функция configureStore() оборачивает createStore()
 * - Под капотом уже настроены Redux Devtools и createAsyncThunk
 * поэтому redux-devtools-extension из сборки можно удалить
 * - Под капотом настроен combineReducers(), поэтому он
 * нам тоже уже не нужен, его можно удалить
 *
 * logger for Redux
 *
 * - Middleware
 *
 * createAction()
 * - Функция принимающая аргументами type и prepareAction (не обязат.)
 
function createAction(type, prepareAction)

 * - Реагирует на действия пользователя в ui, 
 * - Возвращает объект у которого свойство type - это counter/add,
 * a payload - это то, что в это функцию пердать
 * - Чтобы передать сложный payload используем prepareAction
 * - prepareAction() - колбек, позволяет приготовить сложный payload
 
// Example 1
const addTodo = createAction(types.ADD, text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    }
  }
})

// Example 2
const INCREMENT = 'counter/increment'

function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount,
  }
}
const action = increment(3) // { type: 'counter/increment', payload: 3 }
 
 * createReducer()
 *
 * - В createReducer() передается начальный стейт и объект кейсов

import { createReducer } from '@reduxjs/toolkit';

const timer = createReducer(0, {
  [increment.type]: (state, action) => state + action.payload,
  [decrement.type]: (state, action) => state - action.payload,
});

 * 
 * 
 */

/** =================================================
 * React-Redax
 *
 * - Hабор компонентов связывающих React-компоненты и
 * Redux-хранилище через контекст Context
 *
 * Provider
 *
 * - Оборачивает дерево компонентов App и, используя контекст,
 * предоставляет Store и его методы

<Provider store={store}>
  <App />
</Provider>;
 
 * connect()
 *
 * - HOC
 * - Возвращает новый компонент связанный с store
 * - Предоставляет доступ к state и dispatch() с
 * - Cвязывает компонент и store 

connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Component)

 * mapStateToProps(state, [ownProps])
 *
 * - Дает доступ связанному компоненту к нужной части state
 * - Возвращает объект с новыми свойствами для компонента
 * - Вызывается каждый раз когда store обновляется 

const mapStateToProps = (state, props) => ({
  notes: state.notes,
  currentFilter: state.filter,
});

 * mapDispatchToProps(dispatch, [ownProps])
 * 
 * - Соединяет отправку action с пропами компонента
 * - Получает ссылку на метод dispatch, как параметр
 * - Позволяет объявить методы для отправки actions
 * - Возвращает объект свойства которого дополнят props компонента

const mapDispatchToProps = dispatch => ({
  addNote: text => dispatch(addNote(text)),
});

 * 
 *
 */

/** ===============================================
 * Redax
 *
 * - Поток данных однонаправленный
 * - За данные отвечает хранилище
 * - Компоненты вызывают методы обновления данных
 * - Компоненты получают результат обновления данных
 * 
 * Conception
 *
 * -> App(click in ui)
 * -> Action
 * -> Reducer
 * -> Store(change state & ui)
 * 
 * Store
 *
 * - js-object - {}
 * - Содержит: состояние App, методы доступа к App
 * отправки actions и регистрациислушателей
 * - Поучить доступ к state - getState()
 * - Вызввает объявленные редюсеры
 * - Передает редюсерам текущий state и action
 * - Сохраняет обновленное дерево состояния из редюсеров
 * - При обновлении state вызываются все подписчики
 * для обновления ui
 *
 * createStore()
 *
 * - Функция создающая хранилище
 * - Принимает параметры и возвращает созданный Store
 * - createStore(reducer, [preloadedState], [enhancer]):
 * reducer - возвращает следующий state
 * preloadedState - начальный state
 * enhancer - middleware
 * - Возвращает state - store.getState()
 *
 * Actions
 *
 * - Единственный способ изменить state
 * - Содержит (обязательно) type - тип выполняемого действия
 * - Создаются функциями (action creater)
 * - Возвращают объект-action
 * - dispatch(action) - доставка объекта с данными, описывающего
 * произошедшее, из компонентов в Store
 * - Вызывается пользователем при взаимодкйствии с ui
 * - subscribe(listener) - метод регистрации слушателя

const addNote = text => ({
  type: 'ADD_NOTE',
  payload: {
    id: Date.now(),
    text,
  },
});

const deleteNote = id => ({
  type: 'DELETE_NOTE',
  payload: {
    id,
  },
});

 * Reducers
 *
 * - Чистые функции
 * - Принимают предидущий state и action
 * - Возвращают новый state
 * - (previousState, action) => newState
 * - В ердюсере запрещено:
 * Мутировать аргументы;
 * Выполнять API-запросы и т.п.;
 * Вызывать нечистые функции типа Date.now()
 
const initialState = [];

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];

    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload.id);

    default:
      return state;
  }
}
 
 * 
 *
 */

/**
 * Example of the initial Store
 * 
 * Counter (increment/decrement)

import { createStore } from 'redux';

// Initial State
const initialState = {
  value: 0,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        value: state.value + action.payload.value,
      };
    case 'counter/decrement':
      return {
        value: state.value - action.payload.value,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

// Action #1
store.dispatch({
  type: 'counter/increment',
  payload: {
    value: 7,
  },
});

// State after the changes #1
console.log(store.getState()); // {value: 7}

// Action #2
store.dispatch({
  type: 'counter/decrement',
  payload: {
    value: 3,
  },
});

// State after the changes #2
console.log(store.getState()); // {value: 4}

export default store;

 * 
 * 
 */
