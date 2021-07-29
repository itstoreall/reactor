import { useContext } from 'react';
import { useEffect } from 'react';
import ProjectItem from './ProjectItem';
import Context from '../../../Context';

const ProjectList = () => {
  const { getProjects, projects } = useContext(Context);

  // componentDidMount (Get all Projects)
  useEffect(() => {
    getProjects();
  }, []); // eslint-disable-line

  return (
    <ul>
      {projects?.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
