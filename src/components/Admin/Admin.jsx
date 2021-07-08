import { useState } from 'react';
import { useStyles, muiBtn } from './AdminStyles';
import Project from './Project';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';

const { log } = console;

const Admin = () => {
  const [showForm, setshowForm] = useState(false);
  // const [name, setName] = useState('');
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [requires, setRequires] = useState('');
  // const [overlayText, setOverlayText] = useState('');
  // const [page, setPage] = useState('');
  // const [source, setSource] = useState('');
  // const [src, setSrc] = useState('');
  // const [restApi, setRestApi] = useState(false);
  const s = useStyles();
  const mb = muiBtn();
  // const mf = muiForm();

  // Form
  const toggleForm = () => setshowForm(!showForm);

  // // Change Input value
  // const handleInputChange = e => {
  //   const { name, value } = e.target;

  //   name === 'name'
  //     ? setName(value)
  //     : name === 'title'
  //     ? setTitle(value)
  //     : name === 'description'
  //     ? setDescription(value)
  //     : name === 'requires'
  //     ? setRequires(value)
  //     : name === 'overlayText'
  //     ? setOverlayText(value)
  //     : name === 'page'
  //     ? setPage(value)
  //     : name === 'source'
  //     ? setSource(value)
  //     : name === 'src'
  //     ? setSrc(value)
  //     : log('ERROR Input value!');
  // };

  // // Checkbox
  // const handleChange = e => {
  //   setRestApi(e.target.checked);
  // };

  // // Create new Project
  // const handleCreateNewProject = e => {
  //   e.preventDefault();

  //   const newProject = {
  //     name,
  //     title,
  //     description,
  //     requires,
  //     overlayText,
  //     page,
  //     source,
  //     src,
  //     restApi,
  //   };

  //   handleSubmit(newProject);

  //   setName('');
  //   setTitle('');
  //   setDescription('');
  //   setRequires('');
  //   setOverlayText('');
  //   setPage('');
  //   setSource('');
  //   setSrc('');
  //   setRestApi(false);
  // };

  // Submit project to the DB
  const handleSubmit = newProject => {
    log(newProject);
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

      {/* <ul className={s.requestList}>
        <li>{name}</li>
        <li>{title}</li>
        <li>{description}</li>
        <li>{requires}</li>
        <li>{overlayText}</li>
        <li>{page}</li>
        <li>{source}</li>
        <li>{src}</li>
        <li>{restApi ? 'REST-API: true' : null}</li>
      </ul> */}
    </div>
  );
};

export default Admin;
