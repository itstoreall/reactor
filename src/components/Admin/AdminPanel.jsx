import { useState, useEffect } from 'react';
import { useStyles } from './AdminPanelStyles';
import { muiBtn } from './AdminPanelStyles';
import CreateProject from './CreateProject';
import UpdateProject from './UpdateProject';
import DeleteProject from './DeleteProject';
import Button from '@material-ui/core/Button';
import AdminModal from '../AdminModal';
import Context from '../../Context';
import api from '../utils/projectsAPI';

const { log } = console;

const AdminPanel = () => {
  // const [projects, setProjects] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [component, setComponent] = useState('');
  // const [projectToUpdate, setProjectToUpdate] = useState('');
  // const [updateConfirm, setUpdateConfirm] = useState(false);
  // const [projectToDelete, setProjectToDelete] = useState('');
  // const [deleteConfirm, setDeleteConfirm] = useState(false);
  // const s = useStyles();
  // const mb = muiBtn();

  // // componentDidMount (Get all Projects)
  // useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  // // Get all Projects
  // const getProjects = () => api.getAllProjects().then(res => setProjects(res));

  // // Modal --------------------------------v
  // const toggleAdminPanelModal = e => {
  //   getProjects();
  //   setShowModal(!showModal);

  //   e?.currentTarget.name === 'addProject'
  //     ? setComponent('addProject')
  //     : e?.currentTarget.name === 'updateProject'
  //     ? setComponent('updateProject')
  //     : setComponent('deleteProject');
  // };

  // Create Project -----------------------v
  const handleSubmit = newProject => {
    log('Is sent...'); // show Loader

    api
      .createProject(newProject)
      .then(result => log(result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader
  };

  // Update Project -----------------------v
  const handleUpdateProject = id => {
    console.log('UpdateProject', id);
    setProjectToUpdate(projects.find(project => project.id === id));
    setUpdateConfirm(!updateConfirm);
  };

  // Confirm Update
  const handleUpdateConfirm = async () => {
    log('Confirm Click');
    log(projectToUpdate?.id);

    // await api
    //   .deleteProject(projectToDelete.id)
    //   .then(result => log('result', result))
    //   .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
    //   .finally(() => log('Finally')); // hide Loader

    setUpdateConfirm(!updateConfirm);
    getProjects();
  };

  // // Delete Project -----------------------v
  // const handleDeleteProject = id => {
  //   console.log('DeleteProject', id);
  //   setProjectToDelete(projects.find(project => project.id === id));
  //   setDeleteConfirm(!deleteConfirm);
  // };

  // // Confirm Delete
  // const handleDeleteConfirm = async () => {
  //   log('Confirm Click');
  //   log(projectToDelete?.id);

  //   await api
  //     .deleteProject(projectToDelete.id)
  //     .then(result => log('result', result))
  //     .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
  //     .finally(() => log('Finally')); // hide Loader

  //   setDeleteConfirm(!deleteConfirm);
  //   getProjects();
  // };

  return (
    <Context.Provider
      value={{
        projects,
        toggleModal: toggleAdminPanelModal,
        onSubmit: handleSubmit,
        onUpdateProject: handleUpdateProject,
        onUpdateConfirm: handleUpdateConfirm,
        onDeleteProject: handleDeleteProject,
        onDeleteConfirm: handleDeleteConfirm,
        deleteConfirm,
      }}
    >
      <div className={s.AdminPanel}>
        <h2>Portfolio</h2>

        <div>
          {showModal && (
            <AdminModal>
              {component === 'addProject' ? (
                <CreateProject />
              ) : component === 'updateProject' ? (
                <UpdateProject />
              ) : (
                <DeleteProject />
              )}
            </AdminModal>
          )}

          <Button
            name="addProject"
            onClick={toggleAdminPanelModal}
            className={mb.adminProjectBtn}
            variant="contained"
            color="primary"
          >
            + Add project
          </Button>

          <Button
            name="updateProject"
            onClick={toggleAdminPanelModal}
            className={mb.adminProjectBtn}
            variant="contained"
            color="primary"
          >
            ~ Update project
          </Button>

          <Button
            name="deleteProject"
            onClick={toggleAdminPanelModal}
            className={mb.adminProjectBtn}
            variant="contained"
            color="primary"
          >
            – Del project
          </Button>
        </div>
      </div>
    </Context.Provider>
  );
};

export default AdminPanel;
