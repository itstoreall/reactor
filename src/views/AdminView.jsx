import { useState } from 'react';
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
  const [projectToDelete, setProjectToDelete] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  // Get all Projects
  const getProjects = () => api.getAllProjects().then(res => setProjects(res));

  // Modal --------------------------------v
  const toggleDeleteConfirmModal = () => setDeleteConfirm(!deleteConfirm);
  const handleSubmit = newProject => {
    log('Is sent...'); // show Loader

    api
      .createProject(newProject)
      .then(result => log(result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally Create')); // hide Loader
  };

  // Delete Project -----------------------v
  const handleDeleteProject = id => {
    setProjectToDelete(projects.find(project => project.id === id));
    toggleDeleteConfirmModal();
  };

  // Confirm Delete
  const handleDeleteConfirm = async () => {
    await api
      .deleteProject(projectToDelete.id)
      // .then(result => log('result', result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally Delete')); // hide Loader

    toggleDeleteConfirmModal();
  };

  return (
    <Context.Provider
      value={{
        getProjects,
        projects,
        toggleDeleteConfirmModal,
        onSubmit: handleSubmit,
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
            render={() => <Delete props={{ match, location, history }} />}
          />
        </div>
      </div>
    </Context.Provider>
  );
};

export default withRouter(AdminView);
