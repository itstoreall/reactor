import { useState, useEffect } from 'react';
import { useStyles } from './AdminPanelStyles';
import { muiBtn } from './AdminPanelStyles';
import AddProject from './AddProject';
import DeleteProject from './DeleteProject';
import Button from '@material-ui/core/Button';
import Modal from '../Modal';
import api from '../utils/projectsAPI';

const { log } = console;

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [component, setComponent] = useState('');
  const [projectToDelete, setProjectToDelete] = useState('');
  const [deleteOk, setDeleteOk] = useState(false);
  const s = useStyles();
  const mb = muiBtn();

  // componentDidMount (Get all Projects)
  useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  // Get all Projects
  const getProjects = () => api.getAllProjects().then(res => setProjects(res));

  // Modal --------------------------------v
  const toggleModal = e => {
    getProjects();
    setShowModal(!showModal);

    e?.currentTarget.name === 'addProject'
      ? setComponent('addProject')
      : e?.currentTarget.name === 'deleteProject'
      ? setComponent('deleteProject')
      : setComponent('');
  };

  // Create Project -----------------------v
  const handleSubmit = newProject => {
    log('Is sent...'); // show Loader

    api
      .createProject(newProject)
      .then(result => log(result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader
  };

  // Delete Project -----------------------v
  const handleDeleteProject = id => {
    setProjectToDelete(projects.find(project => project.id === id));
    setDeleteOk(!deleteOk);
  };

  // Confirm Delete
  const handleDeleteOk = async () => {
    log(projectToDelete?.id);

    await api
      .deleteProject(projectToDelete.id)
      .then(result => log('result', result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader

    setDeleteOk(!deleteOk);
    getProjects();
  };

  return (
    <div className={s.AdminPanel}>
      <h2>Portfolio</h2>

      <div>
        {showModal && (
          <Modal onCloseModal={toggleModal}>
            {component === 'addProject' ? (
              <AddProject onCloseModal={toggleModal} onSubmit={handleSubmit} />
            ) : component === 'deleteProject' ? (
              <DeleteProject
                projects={projects}
                onDeleteProject={handleDeleteProject}
                deleteOk={deleteOk}
                toggleModal={toggleModal}
                handleDeleteOk={handleDeleteOk}
                onCloseModal={toggleModal}
                onSubmit={handleSubmit}
              />
            ) : (
              console.log('null')
            )}
          </Modal>
        )}

        <Button
          name="addProject"
          onClick={toggleModal}
          className={mb.addProjectBtn}
          variant="contained"
          color="primary"
        >
          + Add project
        </Button>

        <Button
          name="deleteProject"
          onClick={toggleModal}
          className={mb.addProjectBtn}
          variant="contained"
          color="primary"
        >
          – Del project
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
