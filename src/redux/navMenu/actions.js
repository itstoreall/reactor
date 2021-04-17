import { createAction } from '@reduxjs/toolkit';

// Ссылка на функцию со свойством type
export const toggleVisible = createAction('navMenu/visible');

/* Action toggleVisible #1

export const toggleVisible = visible => ({
  type: 'navMenu/visible',
  payload: !visible,
});
*/
