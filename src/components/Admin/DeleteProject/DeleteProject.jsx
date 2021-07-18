import { useStyles } from './DeleteProjectStyles';
import ProjectList from './ProjectList';
import ConfirmDelete from './ConfirmDelete';

const DeleteProject = ({
  projects,
  onDeleteProject,
  deleteOk,
  handleDeleteOk,
  toggleModal,
}) => {
  const s = useStyles();

  return (
    <section className={s.DeleteProjectWrap}>
      <h3>Projects:</h3>
      {!deleteOk ? (
        <ProjectList projects={projects} onDeleteProject={onDeleteProject} />
      ) : (
        <ConfirmDelete
          toggleModal={toggleModal}
          handleDeleteOk={handleDeleteOk}
        />
      )}
    </section>
  );
};

export default DeleteProject;
