import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, todosSelectors } from '../../redux/todos';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import './TodoStyles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginBottom: 30,

    '& > *': {
      color: '#fff',
    },

    '& .MuiFormLabel-root.Mui-focused': {
      color: '#6ecab6',
    },

    '& .MuiInputBase-input.MuiInput-input': {
      borderBottom: '2px solid #666',
    },

    '& .MuiInput-underline:after': {
      borderBottom: '2px solid white',
    },
  },
}));

export default function TodoFilter() {
  const dispatch = useDispatch();
  const filterRef = useRef();
  const value = useSelector(todosSelectors.getFilter);
  const onChange = useCallback(e => dispatch(changeFilter(e.target.value)), [
    dispatch,
  ]);

  const s = useStyles();

  // useEffect(() => {
  //   filterRef.current.focus();
  // });

  return (
    <TextField
      type="text"
      className={s.root}
      autoComplete="off"
      list=""
      value={value}
      onChange={onChange}
      id="outlined-basic"
      label="Filter by name"
      inputRef={filterRef}
    />
  );
}
