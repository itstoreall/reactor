import { useContext } from 'react';
import { useEffect } from 'react';
import ProjectItem from './ProjectItem';
import Context from '../../../Context';
import { useStyles } from './DeleteProjectStyles';

// const { log } = console;

const ProjectList = () => {
  const { getProjects, projects } = useContext(Context);

  const s = useStyles();

  // Get all Projects
  useEffect(() => getProjects(), []); // eslint-disable-line

  return (
    <ul className={s.ProjectList}>
      {projects?.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
