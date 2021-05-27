import TechIconItem from './TechIconItem';
import useStyles from './ResumeStyles';

const TechIconList = () => {
  const techIcons = ['#react', '#redux', '#nodejs', '#js', '#sass', '#html'];
  const s = useStyles();

  return (
    <ul className={s.TechIconList}>
      {techIcons.map(icon => {
        return <TechIconItem key={icon} icon={icon} />;
      })}
    </ul>
  );
};

export default TechIconList;
