import useStyles from './ResumeStyles';
import sprite from '../../svg/sprite.svg';
import resumePDF from './serhii_stanislav_resume.pdf';

const DownloadResume = () => {
  const s = useStyles();

  return (
    <div className={s.downloadResume}>
      <a className={s.downloadResumeLink} href={resumePDF} download>
        <svg>
          <use href={`${sprite}#pdf`}></use>
        </svg>
        Download resume PDF
      </a>
    </div>
  );
};

export default DownloadResume;
