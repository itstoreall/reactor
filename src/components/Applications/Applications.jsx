// import { NavLink, withRouter } from 'react-router-dom';
import useStyles from './ApplicationStyles';
import ApplicationItem from './ApplicationItem';
// import images from './images';
import { apps } from './apps.json';

const Applications = ({ location, match }) => {
  const s = useStyles();

  return (
    <div className={s.Applications}>
      <ul>
        {apps.map(({ id, alt }) => (
          <li key={id}>
            <ApplicationItem alt={alt} s={s} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;

// // <li key={id} className={s.item}>
//   <div className={s.thumb}>
//     <img src={images.phonebook} alt="phonebook" />
//   </div>
//   <div className={s.meta}>
//     <a href={url} target="_blank" rel="noreferrer">
//       {name}
//     </a>
//     <a href={url} target="_blank" rel="noreferrer">
//       {name}
//     </a>
//   </div>
// </li>
// ))}
