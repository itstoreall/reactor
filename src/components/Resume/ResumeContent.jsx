import { useMediaQuery } from '@material-ui/core';
import { refs } from '../refs';
import ContentAvatar from './ContentAvatar';
import ContentContacts from './ContentContacts';
import ContentSkills from './ContentSkills';
import DownloadResume from './ContentDownloadResume';
import ContentSummary from './ContentSummary';
import ContentProjects from './ContentProjects';
import ContentJobs from './ContentJobs';
import ContentEducation from './ContentEducation';
import TechIconList from './TechIconList';
import useStyles from './ResumeStyles';
import resume from './resume.json';

const SummaryContent = () => {
  const s = useStyles();

  // useMediaQuery
  const handleMaxWidth = width => {
    return `(max-width:${width}px) `;
  };
  const handleMinWidth = width => {
    return `(min-width:${width}px) `;
  };
  const mobilePlusMax = useMediaQuery(handleMaxWidth(refs.mobilePlusMax));
  const mobilePlus = useMediaQuery(handleMinWidth(refs.mobilePlus));
  const tablet = useMediaQuery(handleMinWidth(refs.tablet));
  const desktopMax = useMediaQuery(handleMaxWidth(refs.desktopMax));
  const desktop = useMediaQuery(handleMinWidth(refs.desktop));

  return (
    <div className={s.SummaryContent}>
      <aside>
        <ContentAvatar
          mobilePlusMax={mobilePlusMax}
          mobilePlus={mobilePlus}
          desktopMax={desktopMax}
          resume={resume}
        />
        <ContentContacts tablet={tablet} desktop={desktop} resume={resume} />
        <ContentSkills resume={resume} />
        {desktop && <DownloadResume />}
      </aside>

      <div className={s.aboutMe}>
        {desktop && <TechIconList />}
        <ContentSummary desktop={desktop} resume={resume} />
        <ContentProjects />
        <ContentJobs resume={resume} />
        <ContentEducation resume={resume} />
      </div>
    </div>
  );
};

export default SummaryContent;
