import { useContext } from 'react';
import { useStyles } from './LoginStyles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Context from '../../Context';

// const { log } = console;

const Login = () => {
  const classes = useStyles();
  const {
    onSubmit,
    values,
    onChange,
    onShowPassword,
    onMouseDownPassword,
  } = useContext(Context);

  return (
    <div className={classes.root}>
      <div>
        <form onSubmit={onSubmit}>
          <TextField
            value={values.email}
            onChange={onChange('email')}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            autoComplete="off"
          />

          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={onChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onShowPassword}
                    onMouseDown={onMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
