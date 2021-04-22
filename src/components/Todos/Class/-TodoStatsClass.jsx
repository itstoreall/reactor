import { connect } from 'react-redux';
import { todosSelectors } from '../../redux/todos';

const Stats = ({ total, completed }) => {
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
};

const mapStateToProps = state => ({
  total: todosSelectors.getTotalTodoCount(state),
  completed: todosSelectors.getCompletedTodoCount(state),
});

export default connect(mapStateToProps)(Stats);
