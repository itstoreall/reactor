import { useContext } from 'react';
import ProjectItem from './ProjectItem';
import Context from '../../../Context';

const ProjectList = () => {
  const { projects } = useContext(Context);

  return (
    <ul>
      {projects?.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
