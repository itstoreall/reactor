import { useState, useEffect } from 'react';
import { useStyles, muiBtn } from './AdminPanelStyles';
import AddProject from './AddProject';
import DeleteProject from './DeleteProject';
import Button from '@material-ui/core/Button';
import Modal from '../Modal';
import api from '../utils/projectsAPI';

const { log } = console;

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  // const [showForm, setshowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [component, setComponent] = useState('');
  const [projectToDelete, setProjectToDelete] = useState('');
  const [deleteOk, setDeleteOk] = useState(false);
  const s = useStyles();
  const mb = muiBtn();

  // log('projects', projects);

  useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  const getProjects = () => {
    api.getAllProjects().then(res => setProjects(res));
  };

  // Modal
  const toggleModal = e => {
    getProjects();
    setShowModal(!showModal);

    e?.currentTarget.name === 'addProject'
      ? setComponent('addProject')
      : e?.currentTarget.name === 'deleteProject'
      ? setComponent('deleteProject')
      : setComponent('');
  };

  // Create Project
  const handleSubmit = newProject => {
    log('Is sent...'); // show Loader

    api
      .createProject(newProject)
      .then(result => log(result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader
  };

  // Delete Project
  const handleDeleteProject = id => {
    log('projects', projects);
    log('id', id);

    setProjectToDelete(projects.find(project => project.id === id));

    log('projectToDelete', projectToDelete);
    setDeleteOk(!deleteOk);

    // api
    //   .deleteProject(projectToDelete.id)
    //   .then(result => log('result', result))
    //   .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
    //   .finally(() => log('Finally')); // hide Loader

    // setShowModal(!showModal);
  };

  // Delete OK
  const handleDeleteOk = async () => {
    log(projectToDelete?.id);

    await api
      .deleteProject(projectToDelete.id)
      .then(result => log('result', result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader

    setDeleteOk(!deleteOk);
    getProjects();
    // setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.Admin}>
        <h2>Portfolio</h2>

        <div>
          {showModal && (
            <Modal onCloseModal={toggleModal}>
              {component === 'addProject' ? (
                <AddProject
                  onCloseModal={toggleModal}
                  onSubmit={handleSubmit}
                />
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
    </>
  );
};

export default AdminPanel;
