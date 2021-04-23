import axios from 'axios';
import {
  fetchTodosRequest,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from './todos-actions';
import reserveData from '../../components/reserveData.json';
import notify from '../../components/Toastify';

axios.defaults.baseURL = 'http://localhost:2222';

// Fetch Todos
const fetchTodos = async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get('/todos');
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error));
    notify('error', 'Server is not available!');

    window.localStorage['persist:todos'].includes(!'"items":"[]"')
      ? JSON.parse(localStorage.getItem('todos'))
      : dispatch(fetchTodosSuccess(reserveData.todos));
  }
};

// Add Todo
const addTodo = text => async dispatch => {
  const todo = {
    text,
    completed: false,
  };

  dispatch(addTodoRequest());

  try {
    const { data } = await axios.post('/todos', todo);
    console.log(data); // {text: "Todo 9", completed: false, id: 8}
    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoError(error));
    notify('error', 'To ADD you need a Server!');
  }
};

// Delete Todo
const deleteTodo = id => async dispatch => {
  dispatch(deleteTodoRequest());

  try {
    await axios.delete(`/todos/${id}`);
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    dispatch(deleteTodoError(error));
    dispatch(deleteTodoSuccess(id));
  }
};

// Toggle Completed
const toggleCompleted = ({ id, completed }) => async dispatch => {
  const update = { completed };

  dispatch(toggleCompletedRequest());
  try {
    const { data } = await axios.patch(`/todos/${id}`, update);

    dispatch(toggleCompletedSuccess(data));
  } catch (error) {
    toggleCompletedError(error);

    let res = reserveData.todos.find(todo => todo.id === id);
    res = { ...res, completed: completed };

    dispatch(toggleCompletedSuccess(res));
  }
};

/* eslint-disable */
export default { fetchTodos, addTodo, deleteTodo, toggleCompleted };
