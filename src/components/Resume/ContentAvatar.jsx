import TechIconList from './TechIconList';
import photo from './serhiistanislav_900.jpg';
import useStyles from './ResumeStyles';

const ContentAvatar = ({ mobilePlusMax, mobilePlus, desktopMax, resume }) => {
  const { name, position } = resume.avatar;
  const s = useStyles();

  return (
    <section className={s.avatar}>
      <img
        src={photo}
        alt="primaryContentSerhii Stanislav"
        width="250"
        height="250"
      />
      {/* {mobilePlusMax ? (
        <img src={photo} alt="primaryContentSerhii Stanislav" width="250" height="250" />
      ) : mobilePlus ? (
        <img src={photo} alt="Serhii Stanislav" width="270" height="270" />
      ) : null} */}

      {desktopMax && (
        <>
          <h1>{name}</h1>
          <b>{position}</b>
        </>
      )}

      {desktopMax && <TechIconList techIcons={resume.techIcons} />}
    </section>
  );
};

export default ContentAvatar;
