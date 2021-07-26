import { useContext } from 'react';
import { useStyles } from './UpdateProjectStyles';
import ProjectList from './ProjectList';
import ConfirmUpdate from './ConfirmUpdate';
import Context from '../../../Context';

const UpdateProject = () => {
  const s = useStyles();
  const { projects, updateConfirm } = useContext(Context);

  return (
    <section className={s.UpdateProjectWrap}>
      <h3>Projects to Update:</h3>
      {!updateConfirm ? <ProjectList projects={projects} /> : <ConfirmUpdate />}
    </section>
  );
};

export default UpdateProject;
