import { useMediaQuery } from '@material-ui/core';
import photo from './serhiistanislav_900.jpg';
import { refs } from '../refs';
import TechIconList from './TechIconList';
import useStyles from './SummaryStyles';

const SummaryContent = () => {
  const s = useStyles();

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
        <section className={s.avatar}>
          {mobilePlusMax ? (
            <img src={photo} alt="Serhii Stanislav" width="250" height="250" />
          ) : mobilePlus ? (
            <img src={photo} alt="Serhii Stanislav" width="270" height="270" />
          ) : null}

          {desktopMax && (
            <>
              <h1>Serhii Stanislav</h1>
              <b>Front-end developer</b>
            </>
          )}

          {desktopMax && <TechIconList />}
        </section>

        <section className={s.contacts}>
          <h2>Contacts:</h2>
          <ul className={s.contactList}>
            <li>
              Phone:
              {tablet && !desktop && <br />}
              <a href="tel:+380950000000">+38 (000) 525 5252</a>
            </li>
            <li>
              E-&nbsp;mail:
              {tablet && !desktop && <br />}
              <a href="mailto:serhiistanislav@gmail.com">
                serhiistanislav@gmail.com
              </a>
            </li>
          </ul>
        </section>

        <div className={s.skillsWrap}>
          <section className="skills">
            <h2>Tech skills:</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </section>

          <section className="skills">
            <h2>Soft skills:</h2>
            <ul>
              <li>Scrum</li>
              <li>Agile</li>
              <li>GTD</li>
              <li>Teamwork</li>
            </ul>
          </section>
        </div>

        {desktop && (
          <div className={s.downloadSummary}>
            <a href="./resume.zip" download>
              Скачать резюме
            </a>
          </div>
        )}
      </aside>

      <div className={s.aboutMe}>
        {desktop && <TechIconList />}

        <section className={s.enter}>
          {desktop && (
            <>
              <h1>Serhii Stanislav</h1>
              <b>Front-end developer</b>
            </>
          )}
          <p>
            Hello! I write code and improve my skills every day. Today I am
            looking for a developer job for remote work. I would like to be part
            of the team to create cool projects
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="reactor#/applications" target="_blank">
                See projects
              </a>
            </li>
          </ul>
        </section>

        <section className="jobs">
          <h2>Employment history</h2>
          <h3>
            Front-end developer at <span>Freelance</span>
          </h3>
          <p>September 2020 - up to now</p>
          <ul>
            <li>Website development</li>
            <li>SPA development (React/Redux)</li>
            <li>REST API</li>
            <li>Teamwork</li>
          </ul>

          <h3 className="jobs-occupation">
            Web Designer at <span>Freelance</span>
          </h3>
          <p>December 2014 - August 2020</p>
          <ul>
            <li>Website development (Webflow)</li>
            <li>Landing page development (Adobe Muse)</li>
            <li>HTML/CSS layout</li>
          </ul>
        </section>

        <section className="education">
          <h2>Education</h2>
          <h3>
            Node.js (Basic) , <span>GoIT Course</span>
          </h3>
          <p>April - June 2021</p>

          <h3>
            React , <span>GoIT Course</span>
          </h3>
          <p>January - April 2021</p>

          <h3>
            JavaScript (Basic) , <span>GoIT Course</span>
          </h3>
          <p>September - December 2020</p>

          <h3>
            HTML/CSS (Basic), <span>GoIT Course</span>
          </h3>
          <p>May - August 2020</p>

          <h3>
            Web Design (Adobe Muse),{' '}
            <span>Computer Academy «Kademika» Course</span>
          </h3>
          <p>October - January 2016</p>

          <h3>
            Practical psychology,{' '}
            <span>
              Open International University of Human Development «Ukraine»
            </span>
          </h3>
          <p>Septermber 2006 - June 2011</p>

          <h3>
            Computer graphics design, <span>Pro Course</span>
          </h3>
          <p>June - August 2004</p>
        </section>
      </div>
    </div>
  );
};

export default SummaryContent;
