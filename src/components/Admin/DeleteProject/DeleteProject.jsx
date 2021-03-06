import { useContext } from 'react';
import { useStyles } from './DeleteProjectStyles';
import ProjectList from './ProjectList';
import ConfirmDelete from './ConfirmDelete';
import Context from '../../../Context';

const DeleteProject = () => {
  const { projects, deleteConfirm } = useContext(Context);

  const s = useStyles();

  return (
    <section className={s.DeleteProjectWrap}>
      <h3>Projects to Delete:</h3>
      {!deleteConfirm ? <ProjectList projects={projects} /> : <ConfirmDelete />}
    </section>
  );
};

export default DeleteProject;
