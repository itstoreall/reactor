import TechIcons from './TechIcons';
import useStyles from './SummaryStyles';

const Summary = () => {
  const s = useStyles();

  return (
    <>
      <TechIcons />
      <div className={s.container}>
        <aside className="left-side">
          <img
            className="photo"
            src="images/photo.jpg"
            alt="Моя фотография"
            width="370"
          />
          <section className="contacts">
            <h2 className="contacts-title">Contacts</h2>

            <ul className="contacts-list">
              <li className="contacts-item">
                Phone:
                <a href="tel:+380951111111" className="contacts-link">
                  +38 095 111 11 11
                </a>
              </li>
              <li className="contacts-item">
                E-mail:
                <a href="mailto:chornyiav@gmail.com" className="contacts-link">
                  chornyiav@gmail.com
                </a>
              </li>
            </ul>
          </section>
          <section className="skills">
            <h2 className="skills-title">Tech skills</h2>
            <ul className="skills-list">
              <li className="skills-item">HTML</li>
              <li className="skills-item">CSS</li>
              <li className="skills-item">Git</li>
              <li className="skills-item">JavaScript</li>
              <li className="skills-item">React</li>
              <li className="skills-item">Node.js</li>
            </ul>
          </section>
          <section className="skills">
            <h2 className="skills-title">Soft skills</h2>
            <ul className="skills-list">
              <li className="skills-item">Scrum</li>
              <li className="skills-item">Agile</li>
              <li className="skills-item">GTD</li>
              <li className="skills-item">Teamwork</li>
            </ul>
          </section>
          <section className="widget">
            <a className="widget-link" href="./resume.zip" download>
              Скачать резюме
            </a>
          </section>
        </aside>
        <div className="right-side">
          <section className="bio">
            <h1 className="bio-title">Anton Chornyi</h1>
            <p className="bio-occupation">Front-end developer</p>
            <p className="bio-about">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
              adipisci illo, earum atque quae, sequi magni consectetur sit
              perferendis sunt laborum ipsum quas. A incidunt temporibus aut
              harum ad.
            </p>
          </section>

          <section className="projects">
            <h2 className="projects-title">Projects</h2>

            <ol className="projects-list">
              <li>
                <a
                  href="https://lovecamp.allinsol.com/"
                  className="projects-link"
                >
                  https://lovecamp.allinsol.com
                </a>
              </li>
              <li>
                <a href="https://cryptohub.goit.ua/" className="projects-link">
                  https://cryptohub.goit.ua
                </a>
              </li>
              <li>
                <a
                  href="https://kidslike.goit.co.ua/"
                  className="projects-link"
                >
                  https://kidslike.goit.co.ua
                </a>
              </li>
            </ol>
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
    </>
  );
};

export default Summary;
