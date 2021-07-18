import { useStyles } from './DeleteProjectStyles';

const DeleteProject = ({ projects, onDeleteProject }) => {
  const s = useStyles();

  return (
    <section className={s.deleteProjectWrap}>
      <h3>Delete Project:</h3>
      <ul>
        {projects?.map(project => (
          <li key={project.id}>
            <span>{project.title}</span>
            <button onClick={() => onDeleteProject(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeleteProject;
