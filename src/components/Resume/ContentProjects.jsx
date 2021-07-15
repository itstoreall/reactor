import useStyles from './ResumeStyles';
import sprite from '../../svg/sprite.svg';

const ContentProjects = () => {
  const s = useStyles();

  return (
    <section className={s.Projects}>
      <h2>Project experience:</h2>
      <a className={s.projectLink} href="#/portfolio">
        <svg>
          <use href={`${sprite}#code`}></use>
        </svg>
        Projects
      </a>
    </section>
  );
};

export default ContentProjects;
