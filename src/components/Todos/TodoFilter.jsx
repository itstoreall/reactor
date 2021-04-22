import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, todosSelectors } from '../../redux/todos';
import { TextField } from '@material-ui/core';
import './TodoStyles.scss';

export default function TodoFilter() {
  const dispatch = useDispatch();
  const filterRef = useRef();
  const value = useSelector(todosSelectors.getFilter);
  const onChange = useCallback(e => dispatch(changeFilter(e.target.value)), [
    dispatch,
  ]);

  useEffect(() => {
    filterRef.current.focus();
  });

  return (
    <label className="TodoFilter-label">
      <TextField
        type="text"
        className="TodoInput"
        value={value}
        onChange={onChange}
        id="outlined-basic"
        label="Filter by name"
        inputRef={filterRef}
      />
    </label>
  );
}
