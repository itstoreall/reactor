import { useSelector } from 'react-redux';
import { todosSelectors } from '../../redux/todos';

export default function Stats() {
  const total = useSelector(todosSelectors.getTotalTodoCount);
  const completed = useSelector(todosSelectors.getCompletedTodoCount);

  return (
    <div>
      <p>
        <span>Total: {total}</span>
      </p>
      <p>
        <span>Completed: {completed}</span>
      </p>
    </div>
  );
}
