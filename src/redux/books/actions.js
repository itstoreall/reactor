import { createAction } from '@reduxjs/toolkit';

// Ссылка на функцию со свойством type
export const getBookDetails = createAction('bookDetails/get');

export const addBookDetails = createAction('bookDetails/add');