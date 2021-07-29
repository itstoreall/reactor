import { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Context from '../../../Context';

const ConfirmDelete = () => {
  const { toggleDeleteConfirmModal, onDeleteConfirm } = useContext(Context);

  return (
    <div>
      <h4>Delete?</h4>
      <div>
        <Button
          onClick={toggleDeleteConfirmModal}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>

        <Button onClick={onDeleteConfirm} variant="contained" color="primary">
          Ok
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
