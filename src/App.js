// import { connect } from 'react-redux';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Main from './components/Main';
// import useStyles from './AppStyles';

const App = ({ visible }) => {
  // const s = useStyles();

  return (
    <>
      <Header />
      <Main />
      <NavMenu />
    </>
  );
};

// const mapState = state => ({
//   visible: state.navMenu.visible,
// });

// export default connect(mapState)(App);
export default App;
