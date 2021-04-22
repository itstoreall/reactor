import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { todosOperations } from '../../redux/todos';
import Stats from './TodoStats';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';
import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '../Modal';
import './TodosStyles.scss';

export default function Todos() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosOperations.fetchTodos);
  }, [dispatch]);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  return (
    <>
      <Stats />
      <Button
        className="ModaOpen__btn"
        onClick={toggleModal}
        variant="contained"
        color="primary"
        type="button"
      >
        + Add Todo
      </Button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <span className="ModaClose__btn-wrap">
            <IconButton
              className="ModaClose__btn"
              onClick={toggleModal}
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <CloseIcon />
            </IconButton>
          </span>
          <TodoEditor onCloseModal={toggleModal} />
        </Modal>
      )}

      <TodoFilter />
      <TodoList />
    </>
  );
}
