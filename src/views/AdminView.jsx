// import AdminPanel from '../components/Admin';
// import { NavLink } from 'react-router-dom';
import { withRouter, NavLink, Route } from 'react-router-dom';
import CreateProject from '../components/Adm/CreatePtoject';
import api from '../components/utils/projectsAPI';
import Adm2 from '../components/Adm/DeleteProject';
import Context from '../Context';
import s from './ViewStyles.module.scss';

const { log } = console;

const AdminView = ({ match, location, history }) => {
  const handleSubmit = newProject => {
    log('Is sent...'); // show Loader

    api
      .createProject(newProject)
      .then(result => log(result))
      .catch(err => log('AdminPanel --> Submit ERROR Message:', err.message))
      .finally(() => log('Finally')); // hide Loader
  };

  return (
    <Context.Provider
      value={{
        // projects,
        // toggleModal: toggleAdminPanelModal,
        onSubmit: handleSubmit,
        // onUpdateProject: handleUpdateProject,
        // onUpdateConfirm: handleUpdateConfirm,
        // onDeleteProject: handleDeleteProject,
        // onDeleteConfirm: handleDeleteConfirm,
        // deleteConfirm,
      }}
    >
      <div className={s.AdminView}>
        <h1 className={s.viewTitle}>Admin panel</h1>
        <NavLink to={`${match.url}/create-project`}>Adm1</NavLink>
        <NavLink to={`${match.url}/delete-project`}>Adm2</NavLink>

        <Route
          path={`${match.path}/create-project`}
          render={() => <CreateProject props={{ match, location, history }} />}
        />
        <Route path={`${match.path}/delete-project`} component={Adm2} />
      </div>
    </Context.Provider>
  );
};

export default withRouter(AdminView);
