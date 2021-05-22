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

  const modilePlusMax = useMediaQuery(handleMaxWidth(refs.modilePlusMax));
  const modilePlus = useMediaQuery(handleMinWidth(refs.modilePlus));
  const tablet = useMediaQuery(handleMinWidth(refs.tablet));
  const desktopMax = useMediaQuery(handleMaxWidth(refs.desktopMax));
  const desktop = useMediaQuery(handleMinWidth(refs.desktop));

  return (
    <div className={s.SummaryContent}>
      <aside>
        <section className={s.avatar}>
          {modilePlusMax ? (
            <img src={photo} alt="Serhii Stanislav" width="250" height="250" />
          ) : modilePlus ? (
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
              {tablet && <br />}
              <a href="tel:+380950000000">+38 000 000 00 00</a>
            </li>
            <li>
              E-mail:
              {tablet && <br />}
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
          <div className="widget">
            <a href="./resume.zip" download>
              Скачать резюме
            </a>
          </div>
        )}
      </aside>

      <div className={s.aboutMe}>
        {desktop && <TechIconList />}
        <section>
          {desktop && (
            <>
              <h1>Serhii Stanislav</h1>
              <b>Front-end developer</b>
            </>
          )}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
            adipisci illo, earum atque quae, sequi magni consectetur sit
            perferendis sunt laborum ipsum quas. A incidunt temporibus aut harum
            ad.
          </p>
        </section>

        <section className="projects">
          <h2 className="projects-title">Projects</h2>

          <ul className="projects-list">
            <li>
              <a
                href="https://itstoreall.github.io/goit-react-hw-09-phonebook/#/"
                className="projects-link"
              >
                Phonebook
              </a>
            </li>
            <li>
              <a
                href="https://its-react-movies.netlify.app/"
                className="projects-link"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="https://itstoreall.github.io/goit-react-hw-03-image-finder/"
                className="projects-link"
              >
                Image finder
              </a>
            </li>
          </ul>
        </section>

        <section className="jobs">
          <h2 className="jobs-title">Employment history</h2>

          <h3 className="jobs-occupation">
            Front-end developer at <span className="accent">Freelance</span>
          </h3>
          <p className="jobs-time">September 2019 - up to now</p>
          <ul className="experience">
            <li className="experience-item">Lorem ipsum dolor sit amet.</li>
            <li className="experience-item">
              Quaerat corrupti eum harum eveniet?
            </li>
            <li className="experience-item">Sit quasi libero facilis ea?</li>
          </ul>

          <h3 className="jobs-occupation">
            Front-end developer at <span className="accent">Freelance</span>
          </h3>
          <p className="jobs-time">September 2019 - up to now</p>
          <ul className="experience">
            <li className="experience-item">Lorem ipsum dolor sit amet.</li>
            <li className="experience-item">
              Quaerat corrupti eum harum eveniet?
            </li>
            <li className="experience-item">Sit quasi libero facilis ea?</li>
          </ul>

          <h3 className="jobs-occupation">
            Front-end developer at <span className="accent">Freelance</span>
          </h3>
          <p className="jobs-time">September 2019 - up to now</p>
          <ul className="experience">
            <li className="experience-item">Lorem ipsum dolor sit amet.</li>
            <li className="experience-item">
              Quaerat corrupti eum harum eveniet?
            </li>
            <li className="experience-item">Sit quasi libero facilis ea?</li>
          </ul>
        </section>

        <section className="education">
          <h2 className="education-title">Education</h2>

          <h3 className="education-degree">
            Management,
            <span className="accent">
              Kharkiv National University of Radioelectronics
            </span>
          </h3>
          <p className="education-time">Septermber 2009 - June 2014</p>

          <h3 className="education-degree">
            Full Stack Developer, <span className="accent">GoIT Courses</span>
          </h3>
          <p className="education-time">April - November 2020</p>
        </section>
      </div>
    </div>
  );
};

export default SummaryContent;
