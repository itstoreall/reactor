import { withRouter } from 'react-router-dom';
// import Breadcrumbs from '../Breadcrumbs';
import Navigation from './Navigation';
import s from './AppBar.module.scss';

const AppBar = ({ location }) => {
  return (
    <header className={s.pageHeader}>
      <div className={s.containerHeader}>
        {/* <Breadcrumbs /> */}
        <Navigation />
      </div>
    </header>
  );
};

export default withRouter(AppBar);
