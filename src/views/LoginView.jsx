import { useState } from 'react';
import Login from '../components/Login';
import Context from '../Context';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './ViewStyles.module.scss';

// const { log } = console;

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  // const [email, setEmail] = useState('serhiist@mail.net');
  const [password, setPassword] = useState('112233');

  const handleInputChange = e => {
    const { name, value } = e.target;

    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      email,
      password,
    };

    onLogin(newUser);

    setEmail('');
    setPassword('');
  };

  return (
    <Context.Provider
      value={{
        email,
        password,
        onInputChange: handleInputChange,
        onSubmit: handleSubmit,
      }}
    >
      <div className={s.RegisterView}>
        <h1 className={s.viewTitle}>Login</h1>
        <Login />
      </div>
    </Context.Provider>
  );
};

const mapDispatch = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatch)(LoginView);
