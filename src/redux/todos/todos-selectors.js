import { createSelector } from '@reduxjs/toolkit';

// Простые селекторы
const getLoading = state => state.todos.loading;
const getFilter = state => state.todos.filter;
const getAllTodos = state => state.todos.items;

// Составные селекторы (композитные)
const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  // console.log('Высчитывает новое кол-во Completed Todos ');
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

const getVisibleTodos = createSelector(
  [getAllTodos, getFilter],
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();
    // console.log('Составлят новый массив видимых Todos');
    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  },
);

/* eslint-disable */
export default {
  getLoading,
  getFilter,
  getAllTodos,
  getTotalTodoCount,
  getCompletedTodoCount,
  getVisibleTodos,
};

/* ==============================================
// ** Before memoization 
    
// Составные селекторы (композитные)

const getCompletedTodosCount = state => {
  const todos = getAllTodos(state);

  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
};

const getVisibleTodos = state => {
  const todos = getAllTodos(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

---------------------------------------------- */
