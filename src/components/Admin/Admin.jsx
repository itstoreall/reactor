import { useState } from 'react';
import { useStyles, muiBtn, muiForm } from './AdminStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

// const { log } = console;

const Admin = () => {
  const [showForm, setshowForm] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [restApi, setRestApi] = useState(false);
  const s = useStyles();
  const mb = muiBtn();
  const mf = muiForm();

  // Form
  const toggleForm = () => setshowForm(!showForm);

  // Change Input value
  const handleInputChange = e => {
    const { name, value } = e.target;

    name === 'name'
      ? setName(value)
      : name === 'description'
      ? setDescription(value)
      : console.log('ERROR Input value!');
  };

  // Checkbox
  const handleChange = e => {
    setRestApi(e.target.checked);
  };

  // Submit
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className={s.Admin}>
      <h2>Portfolio</h2>

      <div className={s.formWrap}>
        {showForm ? (
          <form
            onSubmit={handleSubmit}
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
              name="description"
              value={description}
              onChange={handleInputChange}
              label="Description"
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
            <Button
              id="addlBtn"
              type="submit"
              // className={mf.addBtn}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
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
      <ul className={s.requestList}>
        <li>{name}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
};

export default Admin;
