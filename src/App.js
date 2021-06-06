import { useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleOverflow } from '../src/redux/app/actions';
import { withRouter } from 'react-router-dom';
import appInfo from './app.json';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import Main from './components/Main';
import ResumeStyles from './AppStyles';

const App = ({ location, hidden, toggleOverflow }) => {
  const s = ResumeStyles();

  useEffect(() => {
    appInfo.location.map(url =>
      location.pathname === url ? toggleOverflow(true) : toggleOverflow(false),
    );
  });

  return (
    <div className={hidden ? s.AppOption_one : s.AppOption_two}>
      <Header />
      <Main />
      <NavMenu />
    </div>
  );
};

const mapState = state => ({
  hidden: state.app.hidden,
});

const mapDispatch = { toggleOverflow };

export default connect(mapState, mapDispatch)(withRouter(App));
