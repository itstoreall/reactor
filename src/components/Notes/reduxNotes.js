/* ======================================
// Redux connection

01 Install Redux and React-Redux 
npm install react-redux



-------------------------------------- */

/**
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

/**
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
