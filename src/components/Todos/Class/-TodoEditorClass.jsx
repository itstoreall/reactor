import React, { Component } from 'react';
import { connect } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
import { Button, TextField } from '@material-ui/core';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.onSubmit(this.state.message);
      this.props.onCloseModal();
      this.setState({ message: '' });
      return;
    }

    alert('Заполни текст Todo');
  };

  render() {
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <label className="TodoEditor__textarea-label">
          <TextField
            className="TodoEditor__textarea"
            value={this.state.message}
            onChange={this.handleChange}
            id="outlined-multiline-static"
            label="Todo text"
            multiline
            rows={2}
            // defaultValue="Default Value"
            variant="outlined"
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
}

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(todosOperations.addTodo(text)),
});

export default connect(null, mapDispatchToProps)(TodoEditor);
