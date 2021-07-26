import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './RegisterStyles';

const Register = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  const s = useStyles();

  const handleInputChange = ({ target: { name, value } }) => {
    setFormValue({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setFormValue({ name: '', email: '', password: '' });
  };

  return (
    <section className={s.addProjectWrap}>
      <h2>Login</h2>
      <form
        onSubmit={handleSubmit}
        // className={mf.root}
        noValidate
        autoComplete="off"
      >
        <div className={s.inputsWrap}>
          <div className={s.requiredWrap}>
            <h4>Required:</h4>
            <TextField
              required
              id="outlined-basic"
              name="name"
              type="text"
              value={formValue.name}
              onChange={handleInputChange}
              label="Name"
              variant="outlined"
            />

            <TextField
              required
              id="outlined-basic"
              name="email"
              type="email"
              value={formValue.email}
              onChange={handleInputChange}
              label="Email"
              variant="outlined"
            />

            <TextField
              required
              id="outlined-basic"
              name="password"
              type="password"
              value={formValue.password}
              onChange={handleInputChange}
              label="Password"
              variant="outlined"
            />
          </div>
        </div>

        <div className={s.buttonWrap}>
          <Button
            id="addlBtn"
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Register;
