import { useState, useEffect } from 'react';
import { useStyles, muiBtn } from './AdminPanelStyles';
import AddProject from './AddProject';
import DeleteProject from './DeleteProject';
import Button from '@material-ui/core/Button';
import Modal from '../Modal';
import api from '../utils/projectsAPI';

const { log } = console;

const AdminPanel = () => {
  // const [projects, setProjects] = useState([]);
  // const [showForm, setshowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [component, setComponent] = useState('');
  const [projectToDelete, setProjectToDelete] = useState(false);
  const s = useStyles();
  const mb = muiBtn();

  // log('projects', projects);

  // useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  // Project Form
  // const toggleForm = () => setshowForm(!showForm);

  // Modal
  const toggleModal = e => {
    setShowModal(!showModal);

    e?.currentTarget.name === 'addProject'
      ? setComponent('addProject')
      : e?.currentTarget.name === 'deleteProject'
      ? setComponent('deleteProject')
      : setComponent('');
  };

  // Submit new Project to the DB
  const handleSubmit = newProject => {
    log('Is sent...'); // show Loader

    api
      .createProject(newProject)
      .then(result => log(result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader
  };

  // Delete
  const handleDeleteProject = (projects, id) => {
    api
      .deleteProject(projectToDelete.id)
      .then(result => log(result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader

    setProjectToDelete(projects.find(project => project.id === id));
    setShowModal(!showModal);
  };

  // Delete OK
  const handleOkModal = () => {
    log(projectToDelete?.id);
    setShowModal(!showModal);
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
                  onDeleteProject={handleDeleteProject}
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

          {/* // <Button
          //   onClick={handleDeleteProject}
          //   variant="contained"
          //   color="primary"
          // >
          //   Open Modal
          // </Button> */}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
