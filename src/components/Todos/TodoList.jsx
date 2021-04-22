import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import TodoItem from './TodoItem';
import { todosSelectors } from '../../redux/todos';
import './TodoStyles.scss';

const TodoList = () => {
  const todos = useSelector(todosSelectors.getVisibleTodos);

  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => {
        return (
          <li
            key={id}
            className={classNames('TodoList__item', {
              'TodoList__item--completed': completed,
            })}
          >
            <TodoItem id={id} text={text} completed={completed} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
