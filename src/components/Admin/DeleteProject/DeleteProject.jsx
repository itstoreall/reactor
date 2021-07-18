import { useState, useEffect } from 'react';
import { useStyles } from './DeleteProjectStyles';
import api from '../../utils/projectsAPI';

const { log } = console;

const DeleteProject = ({ onDeleteProject }) => {
  const [projects, setProjects] = useState([]);
  const s = useStyles();

  useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  const del = id => {
    log(id);
    log(projects);
    projects.filter(project => project.id !== id);
    log(projects);
  };

  return (
    <section className={s.deleteProjectWrap}>
      <h3>Add Project:</h3>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <span>{project.title}</span>
            <button onClick={() => del(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DeleteProject;
