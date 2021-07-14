import { useState, useEffect } from 'react';
import useStyles from './PortfolioStyles';
import AppThumb from './AppThumb';
import AppMeta from './AppMeta';
// import { projects } from './projects.json';
import api from '../utils/projectsAPI';

const { log } = console;

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const s = useStyles();

  useEffect(() => api.getAllProjects().then(res => setProjects(res)), []);

  log(projects);

  return (
    <section className={s.Portfolio}>
      <ul>
        {projects?.map(
          ({
            id,
            src,
            alt,
            title,
            description,
            requires,
            used,
            page,
            source,
          }) => (
            <li key={id}>
              <div className={s.appItem}>
                <AppThumb
                  s={s}
                  src={src}
                  alt={alt}
                  requires={requires}
                  used={used}
                />
                <AppMeta
                  s={s}
                  title={title}
                  description={description}
                  page={page}
                  source={source}
                />
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
};

export default Portfolio;
