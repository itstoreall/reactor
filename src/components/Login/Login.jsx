import { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Context from '../../Context';
import useStyles from './LoginStyles';

const Login = () => {
  const { email, password, onInputChange, onSubmit } = useContext(Context);

  const s = useStyles();

  return (
    <section className={s.Register}>
      <form className={s.LoginViewForm} onSubmit={onSubmit} autoComplete="off">
        <TextField
          id="LoginViewEmail"
          className={s.LoginViewEmail}
          name="email"
          value={email}
          onChange={onInputChange}
          label="Email"
          variant="outlined"
          required
        />

        <TextField
          id="LoginViewEmailPassword"
          className={s.LoginViewPassword}
          name="password"
          value={password}
          onChange={onInputChange}
          label="Password"
          variant="outlined"
          required
        />

        <Button
          className={s.LoginViewBtn}
          id="addlBtn"
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Login;
