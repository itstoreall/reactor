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

axios.defaults.baseURL = 'http://localhost:2222';

// Fetch Todos
const fetchTodos = async dispatch => {
  dispatch(fetchTodosRequest());

  try {
    const { data } = await axios.get('/todos');
    dispatch(fetchTodosSuccess(data));
  } catch (error) {
    dispatch(fetchTodosError(error));
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
    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoError(error));
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
  }
};

/* eslint-disable */
export default { fetchTodos, addTodo, deleteTodo, toggleCompleted };

/* ===============================================
// ** Async axios

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

axios.defaults.baseURL = 'http://localhost:2222';

// Fetch Todos
const fetchTodos = dispatch => {
  dispatch(fetchTodosRequest());

  axios
    .get('/todos')
    .then(({ data }) => dispatch(fetchTodosSuccess(data)))
    .catch(error => dispatch(fetchTodosError(error)));
};

// Add Todo
const addTodo = text => dispatch => {
  const todo = {
    text,
    completed: false,
  };

  // Start (sync)
  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

// Delete Todo
const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

// Toggle Completed
const toggleCompleted = ({ id, completed }) => dispatch => {
  const update = { completed };

  dispatch(toggleCompletedRequest());

  axios
    .patch(`/todos/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch(error => dispatch(toggleCompletedError(error)));
};

export default { fetchTodos, addTodo, deleteTodo, toggleCompleted };
----------------------------------------------- */
