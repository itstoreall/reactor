import { useState } from 'react';
import { useStyles, muiBtn } from './AdminPanelStyles';
import Project from './Project';
import Button from '@material-ui/core/Button';
import { createProject } from '../utils/projectsAPI';

const { log } = console;

const Admin = () => {
  const [showForm, setshowForm] = useState(false);
  const s = useStyles();
  const mb = muiBtn();

  // Project Form
  const toggleForm = () => setshowForm(!showForm);

  // Submit new Project to the DB
  const handleSubmit = newProject => {
    // --> Loader

    createProject(newProject)
      // .then(data => log(data))
      .then(result => log(result))
      .catch(err => log('ERROR Message: -->', err.message))
      .finally(data => log(data));

    log('newProject:', newProject);
  };

  return (
    <div className={s.Admin}>
      <h2>Portfolio</h2>

      <div className={s.formWrap}>
        {showForm ? (
          <Project toggleForm={toggleForm} onSubmit={handleSubmit} />
        ) : (
          <Button
            onClick={toggleForm}
            className={mb.addProjectBtn}
            variant="contained"
            color="primary"
          >
            + Add project
          </Button>
        )}
      </div>
    </div>
  );
};

export default Admin;
