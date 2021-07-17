import { useState } from 'react';
import { useStyles, muiBtn } from './AdminPanelStyles';
import Project from './Project';
import Button from '@material-ui/core/Button';
import Modal from '../Modal';
import api from '../utils/projectsAPI';

const { log } = console;

const Admin = () => {
  const [showForm, setshowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const s = useStyles();
  const mb = muiBtn();

  // Project Form
  const toggleForm = () => setshowForm(!showForm);

  // Modal
  const toggleModal = () => {
    setShowModal(!showModal);
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

  return (
    <>
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
          <Button onClick={toggleModal} variant="contained" color="primary">
            Open Modal
          </Button>
        </div>
      </div>

      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <div className={s.deleteProjectModal}>
            <h2>Delete</h2>
            <p>Do you really want to delete it?</p>
            <div className={s.deleteBtnWrap}>
              <Button onClick={toggleModal} variant="contained" color="primary">
                Concel
              </Button>
              <Button variant="contained" color="primary">
                Delete
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Admin;
