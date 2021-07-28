import { useContext } from 'react';
import { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import api from '../../utils/projectsAPI';
import Context from '../../../Context';

const ProjectList = () => {
  // const { getProjects, projects } = useContext(Context);

  const [projects, setProjects] = useState([]);

  // componentDidMount (Get all Projects)
  // useEffect(() => {
  //   getProjects();
  // }, [getProjects]);
  useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  return (
    <ul>
      {projects?.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
