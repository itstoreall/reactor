const ContentEducation = ({ resume }) => {
  return (
    <section>
      <h2>Education</h2>
      {resume.education.map(({ subject, institute, date }) => (
        <div key={subject}>
          <h3>
            {subject}, <span>{institute}</span>
          </h3>
          <p>{date}</p>
        </div>
      ))}
    </section>
  );
};

export default ContentEducation;
