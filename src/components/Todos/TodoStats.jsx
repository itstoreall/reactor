import { useSelector } from 'react-redux';
import { todosSelectors } from '../../redux/todos';
import './TodoStyles.scss';

export default function Stats() {
  const total = useSelector(todosSelectors.getTotalTodoCount);
  const completed = useSelector(todosSelectors.getCompletedTodoCount);

  return (
    <div className="Stats">
      <p>
        <span>Total: {total}</span>
      </p>
      <p>
        <span>Completed: {completed}</span>
      </p>
    </div>
  );
}
