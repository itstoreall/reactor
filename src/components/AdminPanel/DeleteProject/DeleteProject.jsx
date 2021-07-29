import { useEffect, useContext } from 'react';
import { useStyles } from './DeleteProjectStyles';
import ProjectList from './ProjectList';
import ConfirmDelete from './ConfirmDelete';
// import api from '../../utils/projectsAPI';
import Context from '../../../Context';

const DeleteProject = () => {
  // const [projects, setProjects] = useState([]);

  const { deleteConfirm } = useContext(Context);

  // componentDidMount (Get all Projects)
  // useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  const s = useStyles();

  return (
    <section className={s.DeleteProjectWrap}>
      <h3>Projects to Delete:</h3>
      {!deleteConfirm ? <ProjectList /> : <ConfirmDelete />}
    </section>
  );
};

export default DeleteProject;
