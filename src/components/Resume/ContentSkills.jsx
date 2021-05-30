import useStyles from './ResumeStyles';

const ContentSkills = ({ resume }) => {
  const { tech, soft } = resume.skills;
  const s = useStyles();

  return (
    <div className={s.skillsWrap}>
      <section>
        <h2>Tech skills:</h2>
        <ul>
          {tech.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Soft skills:</h2>
        <ul>
          {soft.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ContentSkills;
