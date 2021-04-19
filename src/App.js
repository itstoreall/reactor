import { connect } from 'react-redux';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Content from './components/Content';
import useStyles from './AppStyles';

const App = ({ visible }) => {
  const s = useStyles();

  return (
    <div className={s.App}>
      <Header />
      <Content />
      <NavMenu />
    </div>
  );
};

const mapState = state => ({
  visible: state.navMenu.visible,
});

export default connect(mapState)(App);
