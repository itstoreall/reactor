import { useEffect } from 'react';
import useStyles from './PortfolioStyles';
import AppThumb from './AppThumb';
import AppMeta from './AppMeta';
import { projects } from './projects.json';
import { getAllProjects } from '../utils/projectsAPI';

const { log } = console;

const Portfolio = () => {
  const s = useStyles();

  useEffect(() => {
    getAllProjects()
      .then(result => log(result))
      .catch(err => log(err.message));
  }, []);

  return (
    <section className={s.Portfolio}>
      <h1>Portfolio</h1>
      <ul>
        {projects.map(
          ({
            id,
            src,
            alt,
            title,
            description,
            requires,
            overlayText,
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
                  overlayText={overlayText}
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
