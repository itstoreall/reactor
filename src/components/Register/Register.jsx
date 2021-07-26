// import { useState } from 'react';
// import { connect } from 'react-redux';
// import { authOperations } from '../../redux/auth';
// import useStyles from './RegisterStyles';

// const { log } = console;

// const Register = ({ onRegister }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // const mf = muiForm();
//   const s = useStyles();

//   const handleInputChange = e => {
//     const { name, value } = e.target;

//     name === 'name'
//       ? setName(value)
//       : name === 'email'
//       ? setEmail(value)
//       : setPassword(value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     const newUser = {
//       name,
//       email,
//       password,
//     };

//     log('newUser', newUser);

//     onRegister(newUser);
//   };

//   return (
//     <section className={s.Register}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleInputChange}
//           autoComplete="off"
//         />
//         <input
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleInputChange}
//           autoComplete="off"
//         />
//         <input
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleInputChange}
//           autoComplete="off"
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </section>
//   );
// };

// const mapDispatch = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatch)(Register);
