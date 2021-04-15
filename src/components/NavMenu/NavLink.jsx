import { PropTypes } from 'prop-types';

const NavLink = ({ path, label }) => <a href={path}>{label}</a>;

NavLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

export default NavLink;
