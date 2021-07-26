import { useContext } from 'react';
import Context from '../../../Context';
import PropTypes from 'prop-types';

const ProjectItem = ({ project: { id, title } }) => {
  const { onDeleteProject } = useContext(Context);

  return (
    <li>
      <span>{title}</span>
      <button onClick={() => onDeleteProject(id)}>Delete</button>
    </li>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default ProjectItem;
