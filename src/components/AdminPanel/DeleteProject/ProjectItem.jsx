import { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Context from '../../../Context';
import PropTypes from 'prop-types';
import { useStyles, useMuiStyles } from './DeleteProjectStyles';

const ProjectItem = ({ project: { id, title } }) => {
  const { onDeleteProject } = useContext(Context);

  const mui = useMuiStyles();
  const s = useStyles();

  return (
    <li>
      <span>{title}</span>
      <div className={s.ProjectItemBtnWrap}>
        <IconButton
          className={mui.ProjectItemBtn}
          // color="primary"
          aria-label="edit project"
          component="span"
        >
          <EditIcon className={mui.ProjectItemIcon} />
        </IconButton>

        <IconButton
          className={mui.ProjectItemBtn}
          onClick={() => onDeleteProject(id)}
          // color="primary"
          aria-label="delete project"
          component="span"
        >
          <DeleteIcon className={mui.ProjectItemIcon} />
        </IconButton>
      </div>
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
