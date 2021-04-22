import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import Todos from '../components/Todos';
import todoSelectors from '../redux/todos/todos-selectors';
// import './components/Todos/TodosStyles.scss';
import s from './ViewStyles.module.scss';

const TodoView = ({ location, history }) => {
  const isLoadingTodos = useSelector(todoSelectors.getLoading);

  const handleGoBack = () => {
    location.state && location.state.from
      ? history.push(location.state.from)
      : history.push('/applications');
  };

  return (
    <section className={s.section}>
      <button className={s.goBackBtn} type="button" onClick={handleGoBack}>
        &#8592; Go back
      </button>
      <div className={s.container}>
        <h1>
          Todos View Redux
          {isLoadingTodos && <span className={s.Loading}> Loading...</span>}
        </h1>
        <Todos />

        <ul className={s.useList}>
          <li>Hooks:</li>
          <li>useState</li>
          <li>useEffect</li>
          <li>useRef</li>
          <li>useCallback</li>
        </ul>

        <ul className={s.useList}>
          <li>use React - Prop Types</li>
          <li>use ESLint</li>
          <li>use Prettier</li>
          <li>use gh-pages</li>
          <li>use Modern normalize</li>
          <li>use Node Sass</li>
          <li>use React JSS</li>
          <li>use Redux</li>
          <li>use React Redux</li>
          <li>use Redux Devtools Extension</li>
          <li>use Material-UI</li>
          <li>use axios</li>
          <li>use classnames</li>
          <li>use react-router-dom</li>
          <li>use shortid - id: {shortid.generate()}</li>
          <li>use Redux Toolkit</li>
          <li>use Logger for Redux</li>
          <li>use Redux Persist</li>
          <li>use JSON Server</li>
          <li>use Reselect (from Toolkit)</li>
        </ul>
      </div>
    </section>
  );
};

export default withRouter(TodoView);
