import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './ViewStyles.module.scss';

// const { log } = console;

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div className={s.RegisterView}>
      <h1 className={s.viewTitle}>Login</h1>

      <section className={s.Register}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

const mapDispatch = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatch)(LoginView);
