import { useState, useEffect } from 'react';
// import AdminPanel from '../components/Admin';
// import { NavLink } from 'react-router-dom';
import { withRouter, NavLink, Route } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Create from '../components/AdminPanel/CreatePtoject';
import Delete from '../components/AdminPanel/DeleteProject';
import api from '../components/utils/projectsAPI';
import Context from '../Context';
import s from './ViewStyles.module.scss';

const { log } = console;

const AdminView = ({ match, location, history }) => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const [component, setComponent] = useState('');
  // const [projectToUpdate, setProjectToUpdate] = useState('');
  // const [updateConfirm, setUpdateConfirm] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  // // componentDidMount (Get all Projects)
  // useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  // Get all Projects
  const getProjects = () => api.getAllProjects().then(res => setProjects(res));

  // Modal --------------------------------v
  const toggleDeleteConfirmModal = () => setDeleteConfirm(!deleteConfirm);
  // const toggleAdminPanelModal = e => {
  //   getProjects();
  //   setShowModal(!showModal);

  //   log(555);

  // e?.currentTarget.name === 'addProject'
  //   ? setComponent('addProject')
  //   : e?.currentTarget.name === 'updateProject'
  //   ? setComponent('updateProject')
  //   : setComponent('deleteProject');
  // };

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
    console.log('DeleteProject', id);
    setProjectToDelete(projects.find(project => project.id === id));
    // setDeleteConfirm(!deleteConfirm);
    toggleDeleteConfirmModal();
  };

  // Confirm Delete
  const handleDeleteConfirm = async () => {
    log('Confirm Click');
    log(projectToDelete?.id);

    await api
      .deleteProject(projectToDelete.id)
      // .then(result => log('result', result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader

    toggleDeleteConfirmModal();
    // getProjects();
  };

  return (
    <Context.Provider
      value={{
        getProjects,
        projects,
        toggleDeleteConfirmModal,
        // showModal: showModal,
        onSubmit: handleSubmit,
        // onUpdateProject: handleUpdateProject,
        // onUpdateConfirm: handleUpdateConfirm,
        onDeleteProject: handleDeleteProject,
        onDeleteConfirm: handleDeleteConfirm,
        deleteConfirm,
      }}
    >
      <div className={s.AdminView}>
        <h1 className={s.viewTitle}>Admin panel</h1>
        <div className={s.AdminViewContentWrap}>
          {location.pathname === '/admin/create-project' ? (
            <NavLink className={s.AdminViewCreateBtn} to={`${match.url}`}>
              <CancelIcon className={s.AdminViewCancelBtnIcon} />
            </NavLink>
          ) : (
            <NavLink
              className={s.AdminViewCreateBtn}
              to={`${match.url}/create-project`}
            >
              <AddCircleIcon className={s.AdminViewCreateBtnIcon} />
            </NavLink>
          )}

          <Route
            path={`${match.path}/create-project`}
            render={() => <Create props={{ match, location, history }} />}
          />
          <Route
            path={`${match.path}`}
            exact
            // path={`${match.path}/delete-project`}
            render={() => <Delete props={{ match, location, history }} />}
          />
        </div>
      </div>
    </Context.Provider>
  );
};

export default withRouter(AdminView);
