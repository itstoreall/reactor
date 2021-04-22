import { Component } from 'react';
import { connect } from 'react-redux';
// import todosOperations from '../../redux/todos/todos-operations';
// import todosSelectors from '../../redux/todos/todos-selectors';
import { todosSelectors, todosOperations } from '../../redux/todos';
import Stats from './TodoStats';
import TodoList from './TodoList.container';
import TodoEditor from './TodoEditor';
import TodoFilter from './TodoFilter';
import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '../Modal';
import './TodosStyles.scss';

class Todos extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Stats />
        <Button
          className="ModaOpen__btn"
          onClick={this.toggleModal}
          variant="contained"
          color="primary"
          type="button"
        >
          + Add Todo
        </Button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <span className="ModaClose__btn-wrap">
              <IconButton
                className="ModaClose__btn"
                onClick={this.toggleModal}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <CloseIcon />
              </IconButton>
            </span>
            <TodoEditor onCloseModal={this.toggleModal} />
          </Modal>
        )}

        <TodoFilter />
        <TodoList />
      </>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
