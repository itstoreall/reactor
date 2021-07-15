import useStyles from './ResumeStyles';
import sprite from '../../svg/sprite.svg';
import certificate from './serhii_stanislav-goit_certificate.jpg';

const ContentSummary = ({ desktop, resume }) => {
  const {
    summary,
    avatar: { name, position },
  } = resume;
  const s = useStyles();

  return (
    <section className={s.enter}>
      {desktop && (
        <>
          <h1>{name}</h1>
          <b>{position}</b>
        </>
      )}
      <p className={s.summary}>{summary}</p>
      <a
        className={s.certificateLink}
        href={certificate}
        target="_blank"
        rel="noreferrer"
      >
        <svg>
          <use href={`${sprite}#certificate`}></use>
        </svg>
        Certificate
      </a>
    </section>
  );
};

export default ContentSummary;
