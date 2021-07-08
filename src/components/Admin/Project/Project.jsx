import { useState } from 'react';
import { useStyles, muiForm } from '../AdminStyles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const { log } = console;

const Project = ({ toggleForm, onSubmit }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requires, setRequires] = useState('');
  const [overlayText, setOverlayText] = useState('');
  const [page, setPage] = useState('');
  const [source, setSource] = useState('');
  const [src, setSrc] = useState('');
  const [restApi, setRestApi] = useState(false);
  const mf = muiForm();
  const s = useStyles();

  // Change Input value
  const handleInputChange = e => {
    const { name, value } = e.target;

    name === 'name'
      ? setName(value)
      : name === 'title'
      ? setTitle(value)
      : name === 'description'
      ? setDescription(value)
      : name === 'requires'
      ? setRequires(value)
      : name === 'overlayText'
      ? setOverlayText(value)
      : name === 'page'
      ? setPage(value)
      : name === 'source'
      ? setSource(value)
      : name === 'src'
      ? setSrc(value)
      : log('ERROR Input value!');
  };

  // Checkbox
  const handleChange = e => {
    setRestApi(e.target.checked);
  };

  // Create new Project
  const handleCreateNewProject = e => {
    e.preventDefault();

    const newProject = {
      name,
      title,
      description,
      requires,
      overlayText,
      page,
      source,
      src,
      restApi,
    };

    onSubmit(newProject);

    setName('');
    setTitle('');
    setDescription('');
    setRequires('');
    setOverlayText('');
    setPage('');
    setSource('');
    setSrc('');
    setRestApi(false);
  };

  return (
    <>
      <form
        onSubmit={handleCreateNewProject}
        className={mf.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          name="name"
          value={name}
          onChange={handleInputChange}
          label="Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="title"
          value={title}
          onChange={handleInputChange}
          label="Title"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="description"
          value={description}
          onChange={handleInputChange}
          label="Description"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="requires"
          value={requires}
          onChange={handleInputChange}
          label="Requires"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="overlayText"
          value={overlayText}
          onChange={handleInputChange}
          label="OverlayText"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="page"
          value={page}
          onChange={handleInputChange}
          label="Page"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="source"
          value={source}
          onChange={handleInputChange}
          label="Source"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="src"
          value={src}
          onChange={handleInputChange}
          label="src"
          variant="outlined"
        />
        <Checkbox
          checked={restApi}
          // onC
          color="primary"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />

        <Button
          onClick={toggleForm}
          id="cancelBtn"
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
        <Button id="addlBtn" type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>

      <ul className={s.requestList}>
        <li>{name}</li>
        <li>{title}</li>
        <li>{description}</li>
        <li>{requires}</li>
        <li>{overlayText}</li>
        <li>{page}</li>
        <li>{source}</li>
        <li>{src}</li>
        <li>{restApi ? 'REST-API: true' : null}</li>
      </ul>
    </>
  );
};

export default Project;
