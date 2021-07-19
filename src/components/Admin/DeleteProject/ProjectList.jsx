import ProjectItem from './ProjectItem';

const ProjectList = ({ projects, onDeleteProject }) => {
  return (
    <ul>
      {projects?.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          onDeleteProject={onDeleteProject}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
