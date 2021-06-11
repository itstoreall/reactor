import useStyles from './ResumeStyles';

const DownloadResume = () => {
  const s = useStyles();

  return (
    <div className={s.downloadResume}>
      <a href="https://fs7.fex.net:443/download/3394039776" download>
        Download resume PDF
      </a>
    </div>
  );
};

export default DownloadResume;
