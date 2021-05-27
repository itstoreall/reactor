import sprite from '../../svg/sprite.svg';

const TechIconItem = ({ icon }) => {
  return (
    <li>
      <svg>
        <use href={sprite + icon}></use>
      </svg>
    </li>
  );
};

export default TechIconItem;
