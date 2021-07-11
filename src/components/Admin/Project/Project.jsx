import { useState } from 'react';
import { useStyles, muiForm } from './ProjectStyles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const { log } = console;

const Project = ({ toggleForm, onSubmit }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requires, setRequires] = useState('');
  const [used, setUsed] = useState([]);
  const [page, setPage] = useState('');
  const [source, setSource] = useState('');
  const [src, setSrc] = useState([]);
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
      : name === 'used'
      ? handleUsed(value)
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

  // Used
  const handleUsed = value => {
    // setOverlayText([...overlayText, value]);
    setUsed([value]);
  };

  // Create new Project
  const handleCreateNewProject = e => {
    e.preventDefault();

    const newProject = {
      name,
      title,
      description: description[0].toUpperCase() + description.slice(1),
      alt: title,
      requires,
      used,
      page,
      source,
      src: [
        `mob_${name}_450_wp`,
        `mob_${name}_900_wp`,
        `mob_${name}_450`,
        `mob_${name}_900`,
        `tab_${name}_354_wp`,
        `tab_${name}_708_wp`,
        `tab_${name}_354`,
        `tab_${name}_708`,
        `desk_${name}_370_wp`,
        `desk_${name}_740_wp`,
        `desk_${name}_370`,
        `desk_${name}_740`,
      ],
      restApi,
    };

    onSubmit(newProject);

    /*
    setName('');
    setTitle('');
    setDescription('');
    setRequires('');
    setUsed('');
    setPage('');
    setSource('');
    setSrc('');
    setRestApi(false);
    */
  };

  return (
    <section className={s.projectWrap}>
      <form
        onSubmit={handleCreateNewProject}
        className={mf.root}
        noValidate
        autoComplete="off"
      >
        <div className={s.inputsWrap}>
          <div className={s.requiredWrap}>
            <h3>Required:</h3>
            <TextField
              required
              id="outlined-basic"
              name="name"
              value={name}
              onChange={handleInputChange}
              label="Name"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              name="title"
              value={title}
              onChange={handleInputChange}
              label="Title"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              name="description"
              value={description}
              onChange={handleInputChange}
              label="Description"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              name="used"
              value={used}
              onChange={handleInputChange}
              label="Used"
              variant="outlined"
            />
            <TextField
              required
              id="outlined-basic"
              name="source"
              value={source}
              onChange={handleInputChange}
              label="Source"
              variant="outlined"
            />
          </div>

          <div className={s.optionallyWrap}>
            <h3>Optionally:</h3>
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
              name="page"
              value={page}
              onChange={handleInputChange}
              label="Page"
              variant="outlined"
            />
            <Checkbox
              checked={restApi}
              color="primary"
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </div>
        </div>

        <div className={s.buttonWrap}>
          <Button
            onClick={toggleForm}
            id="cancelBtn"
            variant="contained"
            color="primary"
          >
            Cancel
          </Button>

          <Button
            id="addlBtn"
            type="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </div>
      </form>

      <ul className={s.requestList}>
        <li>{name}</li>
        <li>{title}</li>
        <li>{description}</li>
        <li>alt={title}</li>
        <li>{requires}</li>
        <li>{used}</li>
        <li>{page}</li>
        <li>{source}</li>
        <li>{src}</li>
        <li>{restApi ? 'REST-API: true' : null}</li>
      </ul>
    </section>
  );
};

export default Project;
