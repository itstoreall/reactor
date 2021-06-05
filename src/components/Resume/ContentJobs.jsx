import useStyles from './ResumeStyles';

const ContentJobs = ({ resume }) => {
  const s = useStyles();

  return (
    <section className={s.jobs}>
      <h2>Employment history</h2>
      {resume.jobs.map(({ position, company, date, specialization }) => (
        <div key={date} className={s.jobListWrap}>
          <h3>
            {position} <span>{company}</span>
          </h3>
          <p>{date}</p>
          <ul>
            {specialization?.map(el => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default ContentJobs;
