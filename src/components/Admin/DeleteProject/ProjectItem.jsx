const ProjectItem = ({ project, onDeleteProject }) => {
  return (
    <li>
      <span>{project.title}</span>
      <button onClick={() => onDeleteProject(project.id)}>Delete</button>
    </li>
  );
};

export default ProjectItem;
