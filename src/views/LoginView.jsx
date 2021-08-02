import { useState } from 'react';
import Login from '../components/Login';
import Context from '../Context';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './ViewStyles.module.scss';

// const { log } = console;

const LoginView = ({ onLogin }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: values.email,
      password: values.password,
    };

    onLogin(newUser);

    // setEmail('');
    // setPassword('');
  };

  return (
    <Context.Provider
      value={{
        values,
        setValues,
        onChange: handleChange,
        onShowPassword: handleClickShowPassword,
        onMouseDownPassword: handleMouseDownPassword,
        onSubmit: handleSubmit,
      }}
    >
      <div className={s.LoginView}>
        <div className={s.LoginViewContentWrap}>
          <h1 className={s.viewTitle}>Login</h1>
          <Login />
        </div>
      </div>
    </Context.Provider>
  );
};

const mapDispatch = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatch)(LoginView);
