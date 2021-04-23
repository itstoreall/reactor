import React, { useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, todosSelectors } from '../../redux/todos';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { refs } from '../refs';
// import './TodoStyles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    // width: '100%',
    marginBottom: 30,

    '& > *': {
      color: '#fff',
      width: '100%',

      [`@media (min-width: ${refs.tablet}px)`]: {
        width: 'calc(50% - 5px)',
      },

      [`@media (min-width: ${refs.desktop}px)`]: {
        // width: 'calc(50% - 5px)',
      },
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

    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: '2px solid #666',
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
