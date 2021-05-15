// import { NavLink, withRouter } from 'react-router-dom';
import useStyles from './ApplicationStyles';
import phonebook from './images/img_phonebook.jpg';
import { apps } from './apps.json';
console.log(phonebook);

const Applications = ({ location, match }) => {
  const s = useStyles();

  return (
    <div className={s.Applications}>
      <div>
        <div className={s.thumb}>
          <img src={phonebook} alt="phonebook" />
        </div>
        <ul className={s.list}>
          {apps.map(({ id, url, name }) => (
            <li key={id} className={s.item}>
              <a href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Applications;
