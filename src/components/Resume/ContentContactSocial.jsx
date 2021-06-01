import sprite from '../../svg/sprite.svg';

const ContentContactSocial = ({ icon, link, title }) => {
  return (
    <span key={icon}>
      <a href={link} target="_blank" rel="noreferrer" title={title}>
        <svg>
          <use href={sprite + icon}></use>
        </svg>
      </a>
    </span>
  );
};

export default ContentContactSocial;
