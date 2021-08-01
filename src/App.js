import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from './AppStyles';
import Header from './components/AppBar';
import Main from './components/Main';
import MenuBtn from './components/MenuBtn';
import NavBar from './components/NavBar';
import Context from './Context';
import ReactGA from 'react-ga';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

const App = ({ onGetCurrentUser, location }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const s = useStyles();

  // Get Current user
  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);

  // Google Analytics
  useEffect(() => {
    ReactGA.initialize('UA-199360185-1');
    ReactGA.pageview(location.pathname);
  }, [location.pathname]);

  // Body overflow
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showNavBar ? 'hidden' : 'auto';
  }, [showNavBar]);

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <Context.Provider value={{ showNavBar, toggleNavBar }}>
      <div className={s.AppWrap}>
        <Header />
        <Main />
        <MenuBtn />
        {showNavBar && <NavBar />}
      </div>
    </Context.Provider>
  );
};

const mapDispatch = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatch)(withRouter(App));
