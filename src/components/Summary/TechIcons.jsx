import sprite from '../../svg/sprite.svg';
import useStyles from './SummaryStyles';

const TechIcons = () => {
  const s = useStyles();

  return (
    <ul className={s.techIcons}>
      <li>
        <svg>
          <use href={sprite + '#react'}></use>
        </svg>
      </li>
      <li>
        <svg>
          <use href={sprite + '#redux'}></use>
        </svg>
      </li>
      <li>
        <svg>
          <use href={sprite + '#nodejs'}></use>
        </svg>
      </li>
      <li>
        <svg>
          <use href={sprite + '#js'}></use>
        </svg>
      </li>
      <li>
        <svg>
          <use href={sprite + '#sass'}></use>
        </svg>
      </li>
      <li>
        <svg>
          <use href={sprite + '#html'}></use>
        </svg>
      </li>
    </ul>
  );
};

export default TechIcons;
