import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todosOperations } from '../../redux/todos';
import { IconButton } from '@material-ui/core';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import Checkbox from '@material-ui/core/Checkbox';
import './TodoStyles.scss';

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  // useCallback
  const deleteTodo = useCallback(
    () => dispatch(todosOperations.deleteTodo(id)),
    [dispatch, id],
  );

  // useCallback
  const completeTodo = useCallback(
    () =>
      dispatch(
        todosOperations.toggleCompleted({
          id,
          completed: !completed,
        }),
      ),
    [dispatch, id, completed],
  );

  return (
    <>
      <label>
        <Checkbox
          type="checkbox"
          className="TodoList__checkbox"
          checked={completed}
          onChange={completeTodo}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </label>
      <p className="TodoList__text">{text}</p>
      <IconButton
        type="button"
        className="TodoList__btn"
        onClick={deleteTodo}
        disabled={!completed}
        color="primary"
        aria-label="delete todo"
        component="span"
      >
        <DeleteTwoToneIcon />
      </IconButton>
    </>
  );
};

export default TodoItem;
