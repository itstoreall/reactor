import useStyles from './ResumeStyles';
import resumePdf from './serhii_stanislav_resume.pdf';

const DownloadResume = () => {
  const s = useStyles();

  return (
    <div className={s.downloadResume}>
      <a href={resumePdf} download>
        Download resume PDF
      </a>
    </div>
  );
};

export default DownloadResume;
