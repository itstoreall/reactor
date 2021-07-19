import Button from '@material-ui/core/Button';

const ConfirmDelete = ({ toggleModal, handleDeleteOk }) => {
  return (
    <div>
      <h4>Delete?</h4>
      <div>
        <Button onClick={toggleModal} variant="contained" color="primary">
          Cancel
        </Button>

        <Button onClick={handleDeleteOk} variant="contained" color="primary">
          Ok
        </Button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
