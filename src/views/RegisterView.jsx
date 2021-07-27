import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './ViewStyles.module.scss';

// const { log } = console;

const RegisterView = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    name === 'name'
      ? setName(value)
      : name === 'email'
      ? setEmail(value)
      : setPassword(value);
    // log(name);
    // log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    onRegister(newUser);

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.RegisterView}>
      <h1 className={s.viewTitle}>Register</h1>

      <section className={s.Register}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            autoComplete="off"
          />
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
  onRegister: authOperations.register,
};

export default connect(null, mapDispatch)(RegisterView);

// export default RegisterView;
