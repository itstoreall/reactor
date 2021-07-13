import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from './AppStyles';
import Header from './components/Header';
import Main from './components/Main';
import MenuBtn from './components/MenuBtn';
import NavBar from './components/NavBar';
import ReactGA from 'react-ga';

const App = ({ location, toggleOverflow }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const s = useStyles();

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
    <div className={s.AppOption_two}>
      <Header />
      <Main />
      <MenuBtn toggleNavBar={toggleNavBar} />
      {showNavBar && <NavBar toggleNavBar={toggleNavBar} />}
    </div>
  );
};

// const mapState = state => ({
//   hidden: state.app.hidden,
// });

// const mapDispatch = { toggleOverflow };

export default withRouter(App);
