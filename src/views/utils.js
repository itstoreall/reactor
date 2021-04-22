import { routes } from '../components/routes';

const handleGoBack = (location, history) => {
  // const { location, history } = this.props;

  location.state && location.state.from
    ? history.push(location.state.from)
    : history.push(routes[2].path);
};

const utils = { handleGoBack };
export default utils; // eslint-disable-line
