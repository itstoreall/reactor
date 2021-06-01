import TechIconItem from './TechIconItem';
import useStyles from './ResumeStyles';

const TechIconList = ({ techIcons }) => {
  const s = useStyles();

  return (
    <ul className={s.TechIconList}>
      {techIcons?.map(icon => {
        return <TechIconItem key={icon} icon={icon} />;
      })}
    </ul>
  );
};

export default TechIconList;
