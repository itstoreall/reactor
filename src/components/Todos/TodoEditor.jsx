import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import { Button, TextField } from '@material-ui/core';

export default function TodoEditor({ onCloseModal }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  // useCallback
  const handleChange = useCallback(e => {
    setMessage(e.currentTarget.value);
  }, []);

  // useCallback
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (message === '') {
        alert('Заполни текст Todo');
      }
      dispatch(todosOperations.addTodo(message));
      onCloseModal();
      setMessage('');
    },
    [dispatch, message, onCloseModal],
  );

  return (
    <form className="TodoEditor" onSubmit={handleSubmit}>
      <label className="TodoEditor__textarea-label">
        <TextField
          className="TodoEditor__textarea"
          autoComplete="off"
          value={message}
          onChange={handleChange}
          id="outlined-multiline-static"
          label="Todo text"
          multiline
          rows={2}
          variant="outlined"
          inputRef={inputRef}
        />
      </label>
      <Button
        className="TodoEditor__btn"
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
