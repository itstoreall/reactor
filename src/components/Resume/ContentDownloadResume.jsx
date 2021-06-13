import useStyles from './ResumeStyles';
import resumePDF from './serhii_stanislav_resume.pdf';

const DownloadResume = () => {
  const s = useStyles();

  return (
    <div className={s.downloadResume}>
      <a href={resumePDF} download>
        Download resume PDF
      </a>
    </div>
  );
};

export default DownloadResume;
