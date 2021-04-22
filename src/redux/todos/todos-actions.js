// import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

export const fetchTodosRequest = createAction('todos/fetchTodosRequest');
export const fetchTodosSuccess = createAction('todos/fetchTodosSuccess');
export const fetchTodosError = createAction('todo/fetchTodosError');

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todo/addTodoError');

export const deleteTodoRequest = createAction('todos/deleteTodoRequest');
export const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
export const deleteTodoError = createAction('todo/deleteTodoError');

export const toggleCompletedRequest = createAction(
  'todos/toggleCompletedRequest',
);
export const toggleCompletedSuccess = createAction(
  'todos/toggleCompletedSuccess',
);
export const toggleCompletedError = createAction('todo/toggleCompletedError');

export const deleteTodo = createAction('todos/delete');
export const changeFilter = createAction('todos/changeFilter');
export const toggleCompleted = createAction('todos/toggleCompleted');

/* eslint-disable */
// export default {
// addTodoRequest,
// addTodoSuccess,
// addTodoError,
// addTodo,
// deleteTodo,
// changeFilter,
// toggleCompleted,
// };

/* ================================================
// ** Sync (completed module)

import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortid.generate(),
    text,
    completed: false,
  },
}));
const deleteTodo = createAction('todos/delete');
const changeFilter = createAction('todos/changeFilter');
const toggleCompleted = createAction('todos/toggleCompleted');

export default { addTodo, deleteTodo, changeFilter, toggleCompleted }; // eslint-disable-line

// ------------------------------------------------- */
