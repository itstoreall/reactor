const ContentLanguages = ({ resume: { languages } }) => {
  return (
    <section>
      <h2>Languages:</h2>
      <ul>
        {languages.map(lang => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
    </section>
  );
};

export default ContentLanguages;
