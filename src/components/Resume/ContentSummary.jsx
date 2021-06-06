import useStyles from './ResumeStyles';

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
    </section>
  );
};

export default ContentSummary;
