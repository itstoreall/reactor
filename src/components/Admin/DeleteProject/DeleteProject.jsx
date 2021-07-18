import { useStyles } from './DeleteProjectStyles';
import Button from '@material-ui/core/Button';

const DeleteProject = ({
  projects,
  onDeleteProject,
  deleteOk,
  handleDeleteOk,
  toggleModal,
}) => {
  const s = useStyles();

  return (
    <section className={s.deleteProjectWrap}>
      <h3>Delete Project:</h3>
      {!deleteOk ? (
        <ul>
          {projects?.map(project => (
            <li key={project.id}>
              <span>{project.title}</span>
              <button onClick={() => onDeleteProject(project.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h4>Delete?</h4>
          <div>
            <Button onClick={toggleModal} variant="contained" color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleDeleteOk}
              variant="contained"
              color="primary"
            >
              Ok
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DeleteProject;
